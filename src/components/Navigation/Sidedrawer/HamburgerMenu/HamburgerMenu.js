import React from "react";
import classes from "./HamburgerMenu.module.css";

function HamburgerMenu(props) {
  const attachedClasses = props.openSideDrawer
    ? [classes.HamburgerMenu, classes.open]
    : [classes.HamburgerMenu];
  console.log(props.openSidedrawer);
  return (
    <div onClick={props.clicked} className={attachedClasses.join(" ")}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerMenu;
