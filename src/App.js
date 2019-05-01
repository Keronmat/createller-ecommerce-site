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

    const oldCount = cartCount;
    const updatedCounted = oldCount + 1;
    const oldPrice = totalForCart;
    const newPrice = oldPrice + parseFloat(itemPrice);

    this.setState(
      () => {
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
      },
      () => console.log(cart, cartCount, totalForCart)
    );
  };
  closeCheckoutHandler = () => {
    this.setState({ checkout: false });
  };
  openCheckoutHandler = () => {
    this.setState({ checkout: true });
  };
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
            />
          </Modal>
        </Layout>
      </div>
    );
  }
}

export default App;
