import { combineReducers } from "redux";
import carts from "./shopping-carts-reducer";

const rootReducer = combineReducers({
  carts
});

export default rootReducer;
