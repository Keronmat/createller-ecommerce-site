import React from "react";
import classes from "./Logo.module.css";
import createllaMobile from "../../assets/images/Creatella-logo-sm.png";
import createllaLogo from "../../assets/images/creatella-logo.png";

export default function LogoLarge() {
  return (
    <a href="/" className={[classes.Logo, "navbar-brand"].join(" ")}>
      <img
        className={[classes.largeLogo, "img img-responsive"].join(" ")}
        src={createllaLogo}
        alt="Pizzahut Logo"
      />
    </a>
  );
}
export function LogoMobile() {
  return (
    <a href="/" className={[classes.Logo, "navbar-brand"].join(" ")}>
      <img
        className={[classes.mobileLogo, "img img-responsive"].join(" ")}
        src={createllaMobile}
        alt="Pizzahut Logo"
      />
    </a>
  );
}
