import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem, {
  NavigationItemDropdown
} from "./NavigationItem/NavigationItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default class NavigationItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInDropdownOpen: false
    };
  }
  handleOpen = () => {
    this.setState({ signInDropdownOpen: true });
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ signInDropdownOpen: false });
  };
  render() {
    return (
      <ul className={[classes.NavigationItems, "nav navbar-nav"].join(" ")}>
        <NavigationItem link="/">Directory</NavigationItem>
        <NavigationItemDropdown
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        >
          Sign in
          <FontAwesomeIcon icon={faSortDown} style={{ marginLeft: "5px" }} />
        </NavigationItemDropdown>
      </ul>
    );
  }
}
