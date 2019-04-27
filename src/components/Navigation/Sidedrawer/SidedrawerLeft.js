import React, { Component } from "react";
import classes from "./Sidedrawer.module.css";
import SidedrawerItem from "../Sidedrawer/SideDrawerItems/SideDrawerItems";

export default class SidedrawerLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuObj: [
        {
          id: 1,
          title: "sign in",
          links: ["/"]
        },
        {
          id: 2,
          title: "Directory",
          links: ["/"]
        }
      ]
    };
  }

  render() {
    console.log(this.props.open);
    let sideMenu = this.state.menuObj.map(obj => {
      return (
        <SidedrawerItem link={obj.links} key={obj.id}>
          {obj.title}{" "}
        </SidedrawerItem>
      );
    });
    let sideDrawerStyle = this.props.open
      ? { transform: "translateX(0)" }
      : { transform: "translateX(-100%)" };
    return (
      <div className={classes.SidedrawerLeft} style={sideDrawerStyle}>
        <ul>{sideMenu}</ul>
      </div>
    );
  }
}
