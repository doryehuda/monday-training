import initialState from "./initial-state";
import * as types from "../actions/action-types";
export default function shoppingCartReducer(
  state = initialState.carts,
  action
) {
  switch (action.type) {
    case types.LOAD_CARTS_SUCCESS:
      return action.payload;
    case types.UPDATE_CART_SUCCESS:
      return state.map(
        cart =>
          cart.id === action.payload.id
            ? Object.assign({}, action.payload)
            : cart
      );
    case types.ADD_CART_SUCCESS:
      return [...state, Object.assign({}, action.payload)];
    case types.DELETE_CART_SUCCESS:
      return [...state.filter(cart => cart.id !== action.payload.id)];
    default:
      return state;
  }
}
