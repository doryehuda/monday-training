import * as types from "./action-types";
import cartsApi from "../api/shopping-cart-api";
export function loadCarts() {
  return function(dispatch) {
    return cartsApi
      .getAllCarts()
      .then(carts => {
        // console.log(carts);
        dispatch(loadCartsSuccess(carts));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadCartsSuccess(carts) {
  return { type: types.LOAD_CARTS_SUCCESS, payload: carts };
}
