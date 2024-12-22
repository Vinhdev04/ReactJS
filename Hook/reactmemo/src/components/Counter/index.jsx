import React, { useState } from "react";
import Text from "../Text";
import "./style.css";
function Counter(props) {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="container">
        <Text />
        <button onClick={handleCounter}>Increase </button>
        <p>
          Result:{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>{count}</span>
        </p>
      </div>
    </>
  );
}

export default Counter;
