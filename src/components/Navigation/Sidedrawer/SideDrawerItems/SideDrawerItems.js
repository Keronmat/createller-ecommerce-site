import React from "react";
import classes from "./SideDrawerItems.module.css";

const SideDrawerItems = props => {
  return (
    <div className={[classes.SideDrawerItems, "card"].join(" ")}>
      {props.children}
    </div>
  );
};
export default SideDrawerItems;
