import React from "react";
import classes from "./sortBar.module.css";

export default function SortBar() {
  return (
    <div className={[classes.sortBar, "row"].join(" ")}>
      <div className={[classes.heading, "col-3"].join(" ")}>
        <p id="sorting">sort by:</p>
      </div>
      <form className="col-9">
        <span>
          <label htmlFor="id"> id</label>{" "}
          <input name="sort" type="radio" value="id" id="id" />
        </span>
        <span>
          <label htmlFor="size"> size</label>{" "}
          <input name="sort" type="radio" value="size" id="size" />
        </span>
        <span>
          <label htmlFor="price"> price</label>{" "}
          <input name="sort" type="radio" value="price" id="price" />
        </span>
      </form>
    </div>
  );
}
