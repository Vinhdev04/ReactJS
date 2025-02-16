import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addition, reset, subtract } from "../../actions/counter";
import "./Counter.css";
Counters.propTypes = {};

function Counters(props) {
  // lấy ra state từ store
  const counter = useSelector((state) => state.counterReducer);
  // console.log(counter);

  // khởi tạo dispatch bằng function useDispatch
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>
        Result: <strong>{counter}</strong>
      </div>
      <div className="btn-group">
        <button onClick={() => dispatch(addition(2))}>+</button>
        <button onClick={() => dispatch(subtract())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Counters;
