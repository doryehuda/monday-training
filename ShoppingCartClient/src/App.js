import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./containers/shopping-cart/shopping-cart";
import ItemDetails from "./containers/item-details/item-details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-content">
          <div className="App-shopping-cart">
            <ShoppingCart  />
          </div>
          <div className="App-item-details">
            <ItemDetails  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
