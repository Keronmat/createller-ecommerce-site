import React from "react";
import classes from "./NavigationItem.module.css";

//re usable nav-items

// component use to display nav-item that is a link
export default function NavigationItem(props) {
  return (
    <li className={[classes.NavigationItem, "navbar-item"].join(" ")}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
}
// component use to display nav-item that is dropdown menu
export function NavigationItemDropdown(props) {
  return (
    <li
      className={[classes.NavigationItem, "navbar-item"].join(" ")}
      onClick={props.openSignInModal}
    >
      <span>{props.children}</span>
    </li>
  );
}
