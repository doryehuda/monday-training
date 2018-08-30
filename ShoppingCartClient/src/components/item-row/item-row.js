import React, { Component } from "react";

class ItemRow extends Component {
  render() {
    return (
      <div>
        {this.props.item}
      </div>
    );
  }
}

export default ItemRow;
