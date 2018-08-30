import React, { Component } from "react";
import "./item-details.css";

class ItemDetails extends Component {
  render() {
    return (
      <div className="item-details container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ItemDetails;
