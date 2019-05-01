import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

//reusable modal component that takes in a show props and modalClosed.
//show === true displays the component and show === false closes the component
// the closedModal props is passed down to the backdrop. Whenever you click the backdrop the modal closes.

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop
          show={this.props.show}
          clickedBackdrop={this.props.modalClosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? ".9" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
