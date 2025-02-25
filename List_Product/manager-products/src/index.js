import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import allReducers from "./reducers";
import reportWebVitals from "./reportWebVitals";
//TODO: Khởi tạo store chứa dữ liệu
const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Dùng Provider để đóng gói dữ liệu state vào ứng dụng
  <Provider store={store}>
    {/* Bọc lại bằng Routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
