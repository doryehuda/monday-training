import initialState from './initial-state';
import * as types from '../actions/action-types'
export default function shoppingCartReducer(state = initialState.carts, action) {
  switch (action.type) {
    case types.LOAD_CARTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
