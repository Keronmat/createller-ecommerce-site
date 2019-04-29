import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./ItemLister.module.css";

export default function ItemLister(props) {
  return (
    <div id="lister" className={[classes.Product, "product"].join(" ")}>
      <span>
        <p>Price: ${props.price}</p>
      </span>
      <div className={classes.ProductInner}>
        <div style={{ fontSize: `${props.size}px` }}>{props.face}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <span>
            <p>Size: {props.size}px</p>
          </span>
        </div>

        <button>
          <span>
            <FontAwesomeIcon icon={faCartPlus} style={{ color: "#1776b1" }} />
          </span>
          Add to basket
        </button>
        <div className={classes.date}>
          <p>added {props.date}</p>
        </div>
      </div>
    </div>
  );
}

export function Overlay() {
  return (
    <div className={classes.productOverlay}>
      <h2>Added to basket</h2>
      <FontAwesomeIcon icon={faCheck} />
    </div>
  );
}
