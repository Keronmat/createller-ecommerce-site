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
      page: 1,
      total: 500,
      sortBy: "price"
    };
  }

  componentDidMount() {
    // Loads some users on initial load
    this.loadProducts();
    // check to see if the window is being scroll
    window.onscroll = () => {
      const { error, loading, hasMore } = this.state;

      // if there's an error||it's already loading||there's nothing left to load
      // do nothing
      if (error || loading || !hasMore) return;

      // Checks that the page has scrolled to the bottom and load products
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.loadProducts();
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //checks to see if the previous sortBy state has change (price, size,id)
    if (prevState.sortBy !== this.state.sortBy) {
      //if yes load the products
      this.loadProducts();
    }
  }
  loadProducts = () => {
    const { limit, page, sortBy, total } = this.state;
    // the state to true for loading before the data is received
    this.setState({ loading: true }, () => {
      const url = `/api/products?_sort=${sortBy}&products?_page=${page}&_limit=${limit}`;

      axios
        .get(url)
        .then(response => {
          // stores all the data from the server in the variable
          const nextProducts = response.data.map(p => ({
            id: p.id,
            face: p.face,
            date: p.date,
            price: p.price,
            size: p.size
          }));

          this.setState({
            //check to see if products length is more than 500. this will let me know if I should add end message
            // change loading to false since we have received all of our data now
            // Merges the next products into our existing products
            hasMore: this.state.products.length < total,
            loading: false,
            products: [...this.state.products, ...nextProducts]
          });
        })
        .catch(err => {
          //manage errors by adding an error message to state to be displayed if any.
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  };

  sortingHandler = e => {
    //receives an event and set sortBy to size, price or value.
    // set products back to an empty array, just before componentDid update loads products again
    this.setState({ sortBy: e.target.value, products: [] });
  };

  render() {
    const { error, hasMore, loading, products } = this.state;
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar
          sortingHandler={this.sortingHandler}
          sortByValue={this.state.sortBy}
        />
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
