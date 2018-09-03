import React from "react";
import ShoppingCart from "./containers/shopping-cart/shopping-cart";
import Home from "./containers/home/home";
import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shopping-cart" component={ShoppingCart} />
  </Switch>
);
