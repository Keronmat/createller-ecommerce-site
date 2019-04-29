import React, { Component } from "react";
import ItemLister from "./ItemLister/ItemLister";
import Spinner from "../../../UI/Spinner/Spinner";
import classes from "./Products.module.css";

export default class Products extends Component {
  render() {
    let items = null;

    if (this.props.loading) {
      items = <Spinner />;
    } else if (this.props.error) {
      items = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    } else {
      items = this.props.products.map(item => {
        const price = item.price / 100; //devide cents by 100 to get dollars value

        const today = new Date().getTime(); //get todays date in ms
        const addedDate = new Date(item.date).getTime(); //get added date in ms
        const msInDay = 1000 * 60 * 60 * 24; //get number of ms in a day.

        const diff = today - addedDate; // Calculate the differences
        let date = null;
        if (Math.round(diff / msInDay) > 6) {
          //check to see if days are more than a week
          date = item.date.slice(0, 15);
        } else {
          date = `${Math.round(diff / msInDay)} days ago`;
        }

        return (
          <ItemLister
            key={item.id}
            date={date}
            face={item.face}
            price={price.toFixed(2)}
            size={item.size}
          />
        );
      });
    }
    return <section className={classes.ProductsRow}>{items}</section>;
  }
}
