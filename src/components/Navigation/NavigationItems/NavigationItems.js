import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem, {
  NavigationItemDropdown
} from "./NavigationItem/NavigationItem";

//Dummy HOC component that just displays each nav link. Also, reusable.

export default class NavigationItems extends Component {
  render() {
    return (
      <ul className={[classes.NavigationItems, "nav navbar-nav"].join(" ")}>
        <NavigationItem link="/">Directory</NavigationItem>
        <NavigationItemDropdown openSignInModal={this.props.openSignInModal}>
          Sign in
        </NavigationItemDropdown>
      </ul>
    );
  }
}
