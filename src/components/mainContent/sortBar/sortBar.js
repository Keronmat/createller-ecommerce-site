import React from "react";
import classes from "./sortBar.module.css";

export default function SortBar(props) {
  return (
    <div className={[classes.sortBar, "row"].join(" ")}>
      <div className={[classes.heading, "col-3"].join(" ")}>
        <p id="sorting">sort by:</p>
      </div>
      <form className="col-9">
        <label>
          id
          <input
            name="sort"
            type="radio"
            value="id"
            checked
            onChange={e => props.sortingHandler(e)}
          />
          <span className={classes.radioButton} />
        </label>

        <label>
          size
          <input
            name="sort"
            type="radio"
            value="size"
            onChange={e => props.sortingHandler(e)}
          />
          <span className={classes.radioButton} />
        </label>

        <label>
          price
          <input
            name="sort"
            type="radio"
            value="price"
            onChange={e => props.sortingHandler(e)}
          />
          <span className={classes.radioButton} />
        </label>
      </form>
    </div>
  );
}
