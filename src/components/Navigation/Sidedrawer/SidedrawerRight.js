import React, { Component } from "react";
import classes from "./Sidedrawer.module.css";

export default class SidedrawerRight extends Component {
  render() {
    let sideDrawerStyle = this.props.open
      ? { transform: "translateX(0)" }
      : { transform: "translateX(100%)" };
    return (
      <div>
        <select>
          <option>date</option>
          <option>size</option>
          <option>price</option>
        </select>
      </div>
    );
  }
}
