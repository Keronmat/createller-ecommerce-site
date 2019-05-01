import React from "react";
import classes from "./Backdrop.module.css";

// reusable component to add backdrop whenever modal is open. Can also be use for side drawer if needed.

const Backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clickedBackdrop} />
  ) : null;

export default Backdrop;
