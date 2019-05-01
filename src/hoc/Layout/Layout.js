import React, { Component } from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SidedrawerLeft from "../../components/Navigation/Sidedrawer/SidedrawerLeft";
import Modal from "../../UI/Modal/Modal";
import SignInForm from "../../components/signInForm/signInForm";
import SignUpForm from "../../components/signUpForm/signUpForm";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawerLeft: false,
      clickSignIn: false,
      signUp: false
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
  signUpHandler = () => {
    this.setState(prevState => ({
      signUp: !prevState.signUp
    }));
    console.log(this.state.signUp);
  };

  render() {
    let formEl = !this.state.signUp ? (
      <SignInForm
        modalClosed={this.signInCancelHandler}
        toggleSignupForm={this.signUpHandler}
      />
    ) : (
      <SignUpForm
        modalClosed={this.signInCancelHandler}
        signUp={this.state.signUp}
        toggleSignupForm={this.signUpHandler}
      />
    );
    return (
      <React.Fragment>
        <Modal
          show={this.state.clickSignIn}
          modalClosed={this.signInCancelHandler}
        >
          {formEl}
        </Modal>
        <Toolbar
          leftDrawerToggler={this.leftDrawerToggler}
          rightDrawerToggler={this.rightDrawerToggler}
          openSideDrawer={this.state.showSideDrawerLeft}
          openSignInModal={this.signInHandler}
          cartCount={this.props.cartCount}
          totalForCart={this.props.totalForCart}
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
