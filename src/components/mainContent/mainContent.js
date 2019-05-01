import React, { Component } from "react";
import axios from "../../axios-products";
import SortBar from "./sortBar/sortBar";
import Products from "./products/products";
import Modal from "../../UI/Modal/Modal";
import classes from "./mainContent.module.css";
//import parse from "html-react-parser";

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
      sortBy: "price",
      addsData: "",
      ads: false,
      productsCount: 0,
      imgSrc: null
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

        // get the amount of products loaded and update the state
        const node = document.getElementById("productSection")
          .childElementCount;
        this.setState({ productsCount: node });
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //checks to see if the previous sortBy state has change (price, size,id)
    if (prevState.sortBy !== this.state.sortBy) {
      //if yes load the products
      this.loadProducts();
    }

    //if there was a change in the product Count state run the ads handler
    if (this.state.productsCount !== prevState.productsCount) {
      this.handleAds();
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

  handleAds = () => {
    const { productsCount, ads } = this.state;

    // if the product count is divisble by 20 change ads state to true and modal will open
    // make request for the ads api

    if (productsCount % 20 === 0) {
      this.setState({ ads: true });

      // generate a ramdom number
      let randomNum = Math.floor(Math.random() * 1000);
      axios
        .get(`/ads/?r=${randomNum}`, { responseType: "arraybuffer" }) //use arraybuffer to get img in binary data
        .then(response => {
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          this.setState({ imgSrc: "data:;base64," + base64 }, () =>
            console.log(productsCount, ads)
          ); // the data in state to be retrieve by the modal.
        })
        .catch(err => {
          //manage errors by adding an error message to state to be displayed if any.
          this.setState({
            error: err.message,
            loading: false
          });
        });
    }
  };
  // use to supply the backdrop of the modal with ads state. set to false to close
  closeAddHandler = () => {
    this.setState({ ads: false });
  };
  render() {
    const { error, hasMore, loading, products, ads, imgSrc } = this.state;

    let modalAds = null;
    if (imgSrc) {
      modalAds = (
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
          <h1>Products Grid</h1>
          <p>
            Here you're sure to find a bargain on some of the finest ascii
            available to purchase. Be sure to peruse our selection of ascii
            faces in an exciting range of sizes and prices.
          </p>
          <p>But first, a word from our sponsors:</p>
          <img src={this.state.imgSrc} alt="ads" style={{ width: "100%" }} />
        </div>
      );
      /* <div
          style={{ height: "auto", backgroundColor: "rgba(255,255,255,.2)" }}
          dangerouslySetInnerHTML={{ __html: adsData }}
        />
      );
      parse(`${adsData}`);*/
    }
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar
          sortingHandler={this.sortingHandler}
          sortByValue={this.state.sortBy}
        />

        <Products
          cartHandler={this.props.cartHandler}
          products={products}
          error={error}
          loading={loading}
          hasMore={hasMore}
        />
        <Modal show={ads} modalClosed={this.closeAddHandler}>
          {modalAds}
        </Modal>
      </div>
    );
  }
}

export default MainContent;
