import React, { Component } from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SidedrawerLeft from "../../components/Navigation/Sidedrawer/SidedrawerLeft";
import Modal from "../../UI/Modal/Modal";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawerLeft: false,
      clickSignIn: false
    };
  }
  leftDrawerToggler = () => {
    this.setState(prevState => ({
      showSideDrawerLeft: !prevState.showSideDrawerLeft
    }));
    //console.log(this.state);
  };
  signInCancelHandler = () => {
    this.setState({ clickSignIn: false });
  };
  signInHandler = () => {
    this.setState({ clickSignIn: true });
    console.log(this.state.clickSignIn);
  };
  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.clickSignIn}
          modalClosed={this.signInCancelHandler}
        />
        <Toolbar
          leftDrawerToggler={this.leftDrawerToggler}
          rightDrawerToggler={this.rightDrawerToggler}
          openSideDrawer={this.state.showSideDrawerLeft}
          openSignInModal={this.signInHandler}
          closeSigInModal={this.signInCancelHandler}
        />
        <SidedrawerLeft
          open={this.state.showSideDrawerLeft}
          openSignInModal={this.signInHandler}
        />

        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
