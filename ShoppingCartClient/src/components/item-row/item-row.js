import React, { Component } from "react";
import './item-row.css'
class ItemRow extends Component {
  render() {
    return (
      <div className="Item-row">
        {this.props.item.title}
      </div>
    );
  }
}

export default ItemRow;
