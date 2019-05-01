import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class OrderSummary extends Component {
  render() {
    const cartSummary = this.props.cart.map((item, index) => {
      return (
        <tr key={item.productID} style={{ color: "white", cursor: "pointer" }}>
          <td>{item.productDescript}</td>
          <td>${item.productPrice}</td>
          <td>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#003268", cursor: "pointer" }}
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
                  ${this.props.totalForCart}
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
