import React, { Component } from "react";
import classes from "./Sidedrawer.module.css";

export default function SidedrawerLeft(props) {
  let sideDrawerStyle = props.open
    ? { transform: "translateX(0)" }
    : { transform: "translateX(-100%)" };
  return (
    <div className={classes.SidedrawerLeft} style={sideDrawerStyle}>
      <ul>
        <li className={[classes.SideDrawerItem, "card"].join(" ")}>
          <a href="#"> Directory</a>
        </li>
        <li
          onClick={() => props.openSignInModal()}
          className={[classes.SideDrawerItem, "card"].join(" ")}
        >
          <a href="#"> sign in</a>
        </li>
      </ul>
    </div>
  );
}
