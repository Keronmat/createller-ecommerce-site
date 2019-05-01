import React from "react";
import classes from "./Cart.module.css";
import cartLogo from "../../../assets/images/shopping-cart.svg";

// displays the cart icon imported from images.
// displays total money in cart (props.cartCount) and total items (props.totalForCart).

function Cart(props) {
  return (
    <button
      href="/"
      className={classes.Cart}
      onClick={() => props.openCheckoutHandler()}
    >
      <span>
        {" "}
        {props.cartCount} items, ${props.totalForCart.toFixed(2)}{" "}
      </span>
      <img src={cartLogo} alt="shopping_cart" />
    </button>
  );
}

export default Cart;
