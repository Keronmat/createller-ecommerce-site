import React from "react";
import classes from "./SideDrawerItems.module.css";

const SideDrawerItems = props => {
  return (
    <li className={[classes.SideDrawerItems, "card"].join(" ")}>
      <a href={props.links}> {props.children}</a>
    </li>
  );
};
export default SideDrawerItems;
