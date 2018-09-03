import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <Link to="/">
              Home
            </Link>
            {" | "}
            <Link to="/shopping-cart">
              Shopping Cart
            </Link>
          </nav>
        </header>
        {this.props.routes}
      </div>
    );
  }
}
App.propTypes = {
  routes: PropTypes.object.isRequired
};

export default App;

// <div className="App-content">
//   <ShoppingCart />
// </div>
