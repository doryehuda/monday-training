import React, { Component } from "react";
import "./shopping-cart.css";
import ItemsList from "../../components/items-list/items-list";
import ItemDetails from "../../components/item-details/item-details";
class ShoppingCart extends Component {
  itemSubmitted(item){
    console.log(item);
  }
  render() {
    let items = [1, 2, 3, 4, 5, 6];
    return (
      <div className="Shopping-cart">
        <div className="Shopping-cart-itemsList">
          <ItemsList items={items} />
        </div>
        <div className="Shopping-cart-itemDetails">
          <ItemDetails onSubmit={this.itemSubmitted} />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
