import React from "react";
import classes from "./Toolbar.module.css";
import Cart from "../Cart/Cart";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerMenu from "../Sidedrawer/HamburgerMenu/HamburgerMenu";
import LogoLarge, { LogoMobile } from "../../Logo/Logo";

//This component is a header container that holds the logo, hamburger menu, nav-links and cart.

//Only one logo to be displayed at a time.  LogoLarge for larger screens and LogoMobile for smaller screens

// Only one props passed to Navigational Items for SignIN button. when click opens the modal with sign in form.

export default function Toolbar(props) {
  return (
    <header className={[classes.Toolbar, "header"].join(" ")}>
      <div className="row">
        <div
          className={[classes.HamburgerMenu, "col-md-3 col-sm-4 col-xs-4"].join(
            " "
          )}
        >
          <HamburgerMenu
            clicked={props.leftDrawerToggler} //props has a boolean value to open and close the side drawer
            openSideDrawer={props.openSideDrawer} // props has a boolean value for hamburger animation
          />
        </div>
        <div
          className={[classes.LogoDiv, " col-md-6 col-sm-4 col-xs-4"].join(" ")}
        >
          <LogoLarge />
          <LogoMobile />
          <h3>Best ascii emoji you can find</h3>
        </div>

        <div
          className={[classes.CartDiv, "col-md-3 col-sm-4 col-xs-4"].join(" ")}
        >
          <Cart
            cartCount={props.cartCount} //shows the total items in cart
            totalForCart={props.totalForCart} //shows the total money for all items in cart
            openCheckoutHandler={props.openCheckoutHandler} // function to toggle modal to show checkout information
          />
        </div>
      </div>
      <div className={[classes.Nav, "row"].join(" ")}>
        <div className="col-12">
          <NavigationItems openSignInModal={props.openSignInModal} />
        </div>
      </div>
    </header>
  );
}
