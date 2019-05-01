import React from "react";
import classes from "./Sidedrawer.module.css";

//displays the sideDrawer for mobiles. opens and closes when hamburger menu is clicked
// Use CSS translate to hide and show the menu.

export default function SidedrawerLeft(props) {
  let sideDrawerStyle = props.open
    ? { transform: "translateX(0)" }
    : { transform: "translateX(-100%)" };
  return (
    <div className={classes.SidedrawerLeft} style={sideDrawerStyle}>
      <ul>
        <li className={[classes.SideDrawerItem, "card"].join(" ")}>
          <a href="/"> Directory</a>
        </li>
        <li
          onClick={() => props.openSignInModal()}
          className={[classes.SideDrawerItem, "card"].join(" ")}
        >
          <a href="/"> sign in</a>
        </li>
      </ul>
    </div>
  );
}
