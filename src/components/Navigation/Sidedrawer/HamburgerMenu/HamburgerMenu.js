import React from "react";
import classes from "./HamburgerMenu.module.css";

//Serves to toggler the left side drawer using clicked props

function HamburgerMenu(props) {
  const attachedClasses = props.openSideDrawer
    ? [classes.HamburgerMenu, classes.open] // if sideDrawer is open add open class to change hamburger to an "X".
    : [classes.HamburgerMenu]; // Else hamburger menu remains the same

  return (
    <div onClick={props.clicked} className={attachedClasses.join(" ")}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerMenu;
