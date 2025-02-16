import { combineReducers } from "redux";
import counterReducer from "./counter";

// sử dụng function combineReducer để kết hợp nhiều reducer
export const allReducers = combineReducers({
  // Thêm nhiều reducer ở tại đây
  counterReducer,
});
