import { combineReducers } from "redux";
import todoReducer from "./todos";

const allReducers = combineReducers({
  todoReducer,
});

export default allReducers;
