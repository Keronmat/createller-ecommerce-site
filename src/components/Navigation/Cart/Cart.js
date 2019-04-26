import React from "react";
import classes from "./Cart.module.css";
import cartLogo from "../../../assets/images/shopping-cart.svg";

function Cart(props) {
  return (
    <a href="/" className={classes.Cart}>
      <span> 0 items in cart </span>
      <img src={cartLogo} alt="shopping_cart" />
    </a>
  );
}

export default Cart;
