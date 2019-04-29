import React, { Component } from "react";
import axios from "../../axios-products";
import SortBar from "./sortBar/sortBar";
import classes from "./mainContent.module.css";
import Products from "./products/products";

export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [], //stores all data from api
      loading: false,
      error: false,
      limit: 9, //the amount of items to load
      page: 1, // the page to start loading items
      totalPages: 500,
      scrolling: false,
      hasMore: true,
      cart: [],
      addedToCart: false
    };
  }

  componentDidMount() {
    this.loadData();

    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { scrolling, page, totalPages } = this.state;

    if (scrolling) return;
    if (totalPages <= page) {
      this.setState({ hasMore: false });
    }

    const section = document.getElementById("test");
    //const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    const sectionOffset = +section.offsetTop + section.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    var bottomOffset = 20;
    if (pageOffset > sectionOffset - bottomOffset) this.loadMore();
  };

  loadData = () => {
    const { products, limit, page, hasMore } = this.state;

    this.setState({ loading: true });

    const url = `api/products/?_page=${page}&_limit=${limit}`;
    axios
      .get(url)
      .then(response => {
        console.log(response.data);

        this.setState({
          products: [...products, ...response.data],
          loading: false,
          scrolling: false,
          hasMore: products.length >= 500
        });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  };
  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  render() {
    const { error, hasMore, loading, products } = this.state;
    let end = !this.state.hasMore ? <p>~ end of catalogue ~</p> : null;
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar />
        <Products
          products={products}
          error={error}
          loading={loading}
          hasMore={hasMore}
        />
        {end}
      </div>
    );
  }
}
