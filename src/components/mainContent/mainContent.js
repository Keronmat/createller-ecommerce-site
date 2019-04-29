import React, { Component } from "react";
import axios from "../../axios-products";
import SortBar from "./sortBar/sortBar";
import classes from "./mainContent.module.css";
import Products from "./products/products";

class MainContent extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      loading: false,
      products: [],
      limit: 10,
      page: 1
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadProducts,
        state: { error, loading, hasMore }
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || loading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadProducts();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadProducts();
  }

  loadProducts = () => {
    const { products, limit, page, total } = this.state;
    this.setState({ loading: true }, () => {
      const url = `api/products/?_page=${page}&_limit=${limit}`;
      axios
        .get(url)
        .then(response => {
          // Creates a massaged array of user data
          const nextProducts = response.data.map(p => ({
            id: p.id,
            face: p.face,
            date: p.date,
            price: p.price,
            size: p.size
          }));

          // Merges the next users into our existing users
          this.setState({
            // Note: Depending on the API you're using, this value may be
            // returned as part of the payload to indicate that there is no
            // additional data to be loaded
            hasMore: this.state.products.length < 500,
            loading: false,
            products: [...this.state.products, ...nextProducts]
          });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  };

  render() {
    const { error, hasMore, loading, products } = this.state;
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar />
        <Products
          products={products}
          error={error}
          loading={loading}
          hasMore={hasMore}
        />
      </div>
    );
  }
}

export default MainContent;
