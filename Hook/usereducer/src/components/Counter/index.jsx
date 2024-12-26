import React, { useState } from "react";
import "./style.css";
function Counter(props) {
  // TODO:  counter with useState():
  const [data, setData] = useState(0);
  const handleIncrease = () => {
    setData(data + 1);
  };

  const handleDecrease = () => {
    setData(data - 1);
  };

  const handleReset = () => {
    setData(0);
  };

  return (
    <div className="container">
      <div>Result: {data}</div>
      <div className="control">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
