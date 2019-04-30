import React from "react";
import classes from "./sortBar.module.css";

export default function SortBar(props) {
  return (
    <div className={[classes.sortBar, "row"].join(" ")}>
      <form className="col-12">
        <div className={classes.radioButton}>
          <input
            onChange={e => props.sortingHandler(e)}
            type="radio"
            id="id"
            name="sort"
            value="id"
            checked={props.sortByValue === "id"}
          />
          <label htmlFor="id">sort by id</label>
        </div>

        <div className={classes.radioButton}>
          <input
            onChange={props.sortingHandler}
            type="radio"
            id="size"
            name="sort"
            value="size"
            checked={props.sortByValue === "size"}
          />
          <label htmlFor="size">sort by size</label>
        </div>

        <div className={classes.radioButton}>
          <input
            onChange={props.sortingHandler}
            type="radio"
            id="price"
            name="sort"
            value="price"
            checked={props.sortByValue === "price"}
          />
          <label htmlFor="price">sort by price</label>
        </div>
      </form>
    </div>
  );
}
