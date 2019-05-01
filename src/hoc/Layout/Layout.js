import React, { Component } from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SidedrawerLeft from "../../components/Navigation/Sidedrawer/SidedrawerLeft";
import Modal from "../../UI/Modal/Modal";
import SignInForm from "../../components/signInForm/signInForm";
import SignUpForm from "../../components/signUpForm/signUpForm";

//HOC component that is reusble for other pages.
// Contains the main layout of the page

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawerLeft: false,
      clickSignIn: false,
      signUp: false
    };
  }
  //manages the side drawer. False closes and True opens the drawer
  // showSideDrawerLeft state changes when hamburger menu is clicked on
  leftDrawerToggler = () => {
    this.setState(prevState => ({
      showSideDrawerLeft: !prevState.showSideDrawerLeft
    }));
  };
  //manages the sign in /sign up modal. False modal and True opens the modal
  // showSideDrawerLeft state changes when hamburger menu is clicked on
  signInCancelHandler = () => {
    this.setState({ clickSignIn: false });
  };
  //manages what form should be displayed. true changes the sign up form to sign in
  signInHandler = () => {
    this.setState({ clickSignIn: true });
  };
  //manages what form should be displayed - sign-up. true changes the sign in form to sign up
  signUpHandler = () => {
    this.setState(prevState => ({
      signUp: !prevState.signUp
    }));
    // console.log(this.state.signUp);
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
          openCheckoutHandler={this.props.openCheckoutHandler}
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
