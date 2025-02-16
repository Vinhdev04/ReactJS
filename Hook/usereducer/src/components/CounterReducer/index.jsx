import React, { useReducer } from "react";
import "./style.css";
const getCounter = (state, action) => {
  // action: Increase, Decrease, Reset
  console.log(state, action);
  switch (action) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return 0;
    default:
      return state;
  }
};
function CounterReducer(props) {
  // TODO:  counter with useReducer(function,initialValue):
  // const [counter, dispatch] = useReducer(reducer, 0); Tương tự nhau, tên biến "dispatch" tùy ý
  const [counter, setCounter] = useReducer(getCounter, 0);
  return (
    <div className="container">
      <div>Result: {counter}</div>
      <div className="control">
        <button onClick={() => setCounter("Increase")}>Increase</button>
        <button onClick={() => setCounter("Decrease")}>Decrease</button>
        <button onClick={() => setCounter("Reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterReducer;
