import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addition, reset, subtract } from "../../actions/counter";
import "./style.css";
function CounterX(props) {
  const counterX = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="containerX">
      <div>
        Result: <strong>{counterX}</strong>
      </div>
      <div className="btn-group">
        <button onClick={() => dispatch(addition(3))}>+3</button>
        <button onClick={() => dispatch(subtract(1))}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default CounterX;
