import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import routes from "./routes";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {loadCarts} from './actions/shopping-cart-actions';

const store = configureStore();
store.dispatch(loadCarts());
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App routes={routes} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
