import React, { Component } from "react";
import axios from "../../axios-products";
import SortBar from "./sortBar/sortBar";
import classes from "./mainContent.module.css";
import Products from "./products/products";

export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
      error: false,
      cart: [],
      addedToCart: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("api/products/?_page=10&_limit=15")
      .then(response => {
        console.log(response);
        const prods = response.data;
        this.setState({ products: prods, loading: false });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }
  render() {
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar />
        <Products
          products={this.state.products}
          error={this.state.error}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
