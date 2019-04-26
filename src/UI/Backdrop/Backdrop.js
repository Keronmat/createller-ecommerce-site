import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clickedBackdrop} />
  ) : null;

export default Backdrop;
