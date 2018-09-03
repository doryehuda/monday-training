import React, { Component } from "react";
import ItemRow from "../item-row/item-row";
import { Link } from 'react-router-dom'

import "./items-list.css";
class ItemsList extends Component {
  itemClicked(item, event) {
    this.props.onItemSelected(item);
    event.preventDefault();
  }
  render() {
    var items = this.props.items.map(item => {
      return (
        <li key={item.id}>
          <Link to={`/shopping-cart/${item.id}`}>
            <ItemRow item={item} />
          </Link>
        </li>
      );
    });

    return <ul className="Items-list">{items}</ul>;
  }
}

export default ItemsList;
