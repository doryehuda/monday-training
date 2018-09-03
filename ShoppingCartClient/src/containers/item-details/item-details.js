import React, { Component } from "react";
import "./item-details.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ItemForm from "../../components/item-form/item-form";

class ItemDetails extends Component {
  handleItemUpdate(item) {
    console.log(item);
  }
  handleItemDelete(itemID) {
    console.log(itemID);
  }


  render() {
    return (
      <div className="item-details container">
        <ItemForm item={this.props.cart} onSubmit={this.handleItemUpdate} onDelete={this.handleItemDelete} />
      </div>
    );
  }
}

ItemDetails.propTypes = {
  cart: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let cart = { title: "" };
  const cartId = ownProps.match.params.id;
  if (state.carts.length > 0) {
    cart = Object.assign(
      {},
      state.carts.find(cart => cart.id.toString() === cartId)
    );
  }
  return { cart: cart };
}

export default connect(mapStateToProps)(ItemDetails);
