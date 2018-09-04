import * as types from "./action-types";
import cartsApi from "../api/shopping-cart-api";
export function loadCarts() {
  return function(dispatch) {
    return cartsApi
      .getAllCarts()
      .then(carts => {
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

export function updateCart(cart) {
  return function(dispatch) {
    return cartsApi
      .updateCart(cart)
      .then(responseCart => {
        dispatch(updateCartSuccess(responseCart));
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export function updateCartSuccess(cart) {
  return { type: types.UPDATE_CART_SUCCESS, payload: cart };
}

export function addCart(cart) {
  return function(dispatch) {
    return cartsApi
      .addCart(cart)
      .then(responseCart => {
        dispatch(addCartSuccess(responseCart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addCartSuccess(cart) {
  return { type: types.ADD_CART_SUCCESS, payload: cart };
}

export function deleteCart(cart) {
  return function(dispatch) {
    return cartsApi
      .deleteCart(cart)
      .then(response => {
        dispatch(deleteCartSuccess(cart));
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export function deleteCartSuccess(cart) {
  return { type: types.DELETE_CART_SUCCESS, payload: cart };
}
