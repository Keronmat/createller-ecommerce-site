import React from "react";
import classes from "./Toolbar.module.css";
import Cart from "../Cart/Cart";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerMenu from "../Sidedrawer/HamburgerMenu/HamburgerMenu";
import LogoLarge, { LogoMobile } from "../../Logo/Logo";

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
            clicked={props.leftDrawerToggler}
            openSideDrawer={props.openSideDrawer}
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
          <Cart />
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
