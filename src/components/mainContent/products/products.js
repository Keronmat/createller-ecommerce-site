import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: []
    };
  }
  productsHandler = () => {
    //alert("continue");
    this.setState({ loading: true });

    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };
  render() {
    return <div />;
  }
}
