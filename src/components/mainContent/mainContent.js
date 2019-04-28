import React, { Component } from "react";
import SortBar from "./sortBar/sortBar";
import classes from "./mainContent.module.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={[classes.mainContent, "container-fluid"].join(" ")}>
        <SortBar />
        main content with grids
      </div>
    );
  }
}
