import React, { Component } from "react";
import "./shopping-cart.css";
import ItemsList from "../../components/items-list/items-list";
class ShoppingCart extends Component {
  render() {
    let items = [1, 2, 3, 4, 5, 6];
    return (
      <div className="shopping-cart container">
        <ItemsList items={items} />
      </div>
    );
  }
}

export default ShoppingCart;
