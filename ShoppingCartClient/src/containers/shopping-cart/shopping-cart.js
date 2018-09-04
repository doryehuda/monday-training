import React, { Component } from "react";
import "./shopping-cart.css";
import ItemsList from "../../components/items-list/items-list";
import ItemDetails from "../item-details/item-details";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  render() {
    return (
      <div className="Shopping-cart">
        <div className="Shopping-cart-itemsArea">
          <Link to={`${this.props.match.url}/new`}>
            <button className="btn btn-primary Shopping-cart-new">New</button>
          </Link>
          <div className="Shopping-cart-itemsList">
            <ItemsList
              items={this.props.carts}
              onItemSelected={this.handleItemSelected}
            />
          </div>
        </div>
        <div className="Shopping-cart-itemDetails">
          <Switch>
            <Route
              path={`${this.props.match.url}/new`}
              component={ItemDetails}
            />
            <Route
              path={`${this.props.match.url}/:id`}
              component={ItemDetails}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  carts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    carts: state.carts
  };
}

export default connect(mapStateToProps)(ShoppingCart);
