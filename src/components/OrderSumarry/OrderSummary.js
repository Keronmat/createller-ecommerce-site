import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//showing items in cart with 3 columns. Price, face and remove button
// show subtotal for all items added
//dummy function to reflect ordersummary

export default class OrderSummary extends Component {
  render() {
    const cartSummary = this.props.cart.map((item, index) => {
      return (
        <tr
          key={item.productID + index}
          style={{ color: "white", cursor: "pointer" }}
        >
          <td>{item.productDescript}</td>
          <td>${item.productPrice}</td>
          <td>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#ffd700", cursor: "pointer" }}
              onClick={() =>
                this.props.removeCartItemHandler(
                  item.productID,
                  item.productPrice
                )
              }
            />
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <Table responsive>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartSummary}
            <tr>
              <td
                colSpan="3"
                style={{
                  textAlign: "right",
                  color: "#ffd700",
                  fontWeight: 500
                }}
              >
                Sub-Total
                <span style={{ margin: "10px" }}>
                  ${this.props.totalForCart.toFixed(2)}
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button
                  style={{
                    backgroundColor: "#003268",
                    outline: "none",
                    border: "none"
                  }}
                  onClick={() => this.props.purchaseCheckout()}
                >
                  Checkout
                </Button>
              </td>
              <td colSpan="2">
                <Button
                  style={{
                    backgroundColor: "#ED1C24",
                    outline: "none",
                    border: "none"
                  }}
                  onClick={() => this.props.purchaseCancelled()}
                >
                  Continue
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </React.Fragment>
    );
  }
}
