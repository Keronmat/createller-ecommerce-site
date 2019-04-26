import React, { Component } from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SidedrawerLeft from "../../components/Navigation/Sidedrawer/SidedrawerLeft";
import SidedrawerRight from "../../components/Navigation/Sidedrawer/SidedrawerRight";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawerLeft: false,
      showSideDrawerRight: false
    };
  }
  leftDrawerToggler = () => {
    this.setState(prevState => ({
      showSideDrawerLeft: !prevState.showSideDrawerLeft
    }));
    //console.log(this.state);
  };
  rightDrawerToggler = () => {
    this.setState(prevState => ({
      showSideDrawerRight: !prevState.showSideDrawerRight
    }));
    // console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar
          leftDrawerToggler={this.leftDrawerToggler}
          rightDrawerToggler={this.rightDrawerToggler}
        />
        <SidedrawerLeft open={this.state.leftDrawerToggler} />
        <SidedrawerRight open={this.state.leftDrawerToggler} />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
