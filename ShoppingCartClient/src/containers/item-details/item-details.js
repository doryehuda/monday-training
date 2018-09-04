import React, { Component } from "react";
import "./item-details.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ItemForm from "../../components/item-form/item-form";
import * as cartActions from "../../actions/shopping-cart-actions";
import { bindActionCreators } from "redux";
import { Redirect } from 'react-router-dom'

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { navigateToShoppingCart: false };

    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }
  handleItemUpdate(item) {
    if (item.id) {
      //UPDATE
      this.props.actions.updateCart(item);
    } else {
      //ADD
      this.props.actions.addCart(item);
    }
  }
  handleItemDelete(item) {
    this.setState({ navigateToShoppingCart: true });
    this.props.actions.deleteCart(item);
  }

  render() {
    if (this.state.navigateToShoppingCart) {
      return <Redirect to="/shopping-cart" push={true} />;
    }
    return (
      <div className="item-details container">
        <ItemForm
          item={this.props.cart}
          onSubmit={this.handleItemUpdate}
          onDelete={this.handleItemDelete}
        />
      </div>
    );
  }
}

ItemDetails.propTypes = {
  cart: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let cart = { title: "" };
  const cartId = ownProps.match.params.id;

  if (cartId && state.carts.length > 0) {
    cart = Object.assign(
      {},
      state.carts.find(cart => cart.id.toString() === cartId)
    );
  }
  return { cart: cart };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
