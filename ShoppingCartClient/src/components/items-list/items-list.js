import React, { Component } from "react";
import ItemRow from "../item-row/item-row";
import './items-list.css'
class ItemsList extends Component {
  render() {
    var items = this.props.items.map(item => {return <li><ItemRow item={item} /></li>});

    return (
      <ul className="Items-list">
        {items}
      </ul>
    );
  }
}

export default ItemsList;
