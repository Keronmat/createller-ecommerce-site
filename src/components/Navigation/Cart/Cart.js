import React from "react";
import classes from "./Cart.module.css";
import cartLogo from "../../../assets/images/shopping-cart.svg";

function Cart(props) {
  return (
    <a href="/" className={classes.Cart}>
      <span>
        {" "}
        {props.cartCount} items, ${props.totalForCart.toFixed(2)}{" "}
      </span>
      <img src={cartLogo} alt="shopping_cart" />
    </a>
  );
}

export default Cart;
