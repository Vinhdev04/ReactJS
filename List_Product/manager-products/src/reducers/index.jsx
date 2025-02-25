import { combineReducers } from "redux";
import cartReducer from "./cart";

//TODO: nhóm thành 1 reducer
const allReducers = combineReducers({ cartReducer });
export default allReducers;
