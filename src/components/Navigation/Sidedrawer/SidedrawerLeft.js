import React, { Component } from "react";
import classes from "./Sidedrawer.module.css";
import SideDrawerItems from "./SideDrawerItems/SideDrawerItems";

export default class SidedrawerLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuObj: [
        {
          id: 1,
          title: "sign in",
          links: ["/"]
        }
      ]
    };
  }

  render() {
    let sideMenu = this.state.menuObj.map(obj => {
      return <SideDrawerItems key={obj.id} header={obj.title} />;
    });
    let sideDrawerStyle = this.props.open
      ? { transform: "translateX(0)" }
      : { transform: "translateX(-100%)" };
    return (
      <div
        className={[classes.Sidedrawer, "accordion"].join(" ")}
        style={sideDrawerStyle}
      >
        {sideMenu}
      </div>
    );
  }
}
