import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import MainContent from "./components/mainContent/mainContent";
import Modal from "./UI/Modal/Modal";
import OrderSummary from "./components/OrderSumarry/OrderSummary";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      cartCount: 0,
      totalForCart: 0,
      checkout: false
    };
  }

  cartHandler = (itemID, itemPrice, itemFace) => {
    const { totalForCart, cart, cartCount } = this.state;

    // increment by one , to reflect number of items in cart each time add to cart button is clicked
    const oldCount = cartCount;
    const updatedCounted = oldCount + 1;
    //increment price to reflect total $ in cart
    const oldPrice = totalForCart;
    const newPrice = oldPrice + parseFloat(itemPrice);

    this.setState(() => {
      //copy the initial state
      //store the cart items
      return {
        cart: [
          ...cart,
          {
            productID: itemID,
            productPrice: itemPrice,
            productDescript: itemFace
          }
        ],
        totalForCart: newPrice,
        cartCount: updatedCounted
      };
    });
  };

  removeCartItemHandler = (id, price) => {
    const { totalForCart, cart, cartCount } = this.state;

    //decrement by one , to reflect number of items in cart each time the remove button in order summary is clicked
    const oldCount = cartCount;
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;

    // deduct item price as item is remove from cart

    const oldPrice = totalForCart;
    const newPrice = oldPrice - price;

    this.setState(
      prevState => {
        //get the previous state of cart and copy all items in the cart
        //get the index of the current item by using findIndex function
        //remove that item by using splice method
        // update the cart
        const oldCart = [...prevState.cart];
        const indexOfItemToDelete = oldCart.findIndex(item => item.id === id);
        oldCart.splice(indexOfItemToDelete, 1);

        return {
          cart: oldCart,
          cartCount: updatedCounted,
          totalForCart: newPrice
        };
      },
      () => console.log(cart, cartCount, totalForCart)
    );
  };
  //change checkout to false to close modal with order summary
  closeCheckoutHandler = () => {
    this.setState({ checkout: false });
  };
  //change checkout to true to open modal with order summary
  openCheckoutHandler = () => {
    this.setState({ checkout: true });
  };
  //new page to needs to be created so checkout button can lead to this page showing all items to purchase
  purchaseCheckoutHandler = () => {
    alert("checkout");
  };
  render() {
    return (
      <div className="container-fixed">
        <Layout
          cartCount={this.state.cartCount}
          totalForCart={this.state.totalForCart}
          openCheckoutHandler={this.openCheckoutHandler}
        >
          <MainContent cartHandler={this.cartHandler} />
          <Modal
            show={this.state.checkout}
            modalClosed={this.closeCheckoutHandler}
          >
            <OrderSummary
              cart={this.state.cart}
              totalForCart={this.state.totalForCart}
              purchaseCheckout={this.purchaseCheckoutHandler}
              purchaseCancelled={this.closeCheckoutHandler}
              removeCartItemHandler={this.removeCartItemHandler}
            />
          </Modal>
        </Layout>
      </div>
    );
  }
}

export default App;
