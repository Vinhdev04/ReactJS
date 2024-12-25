import React, { memo } from "react";
import "./style.css";
function Result(props) {
  console.log("rendering result....");
  const { getCounter, resetCounter } = props;

  const handleCounter = () => {
    getCounter();
  };

  const handleReset = () => {
    resetCounter();
  };
  return (
    <>
      <button onClick={handleCounter}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default memo(Result);
// TODO: Nếu ko có memo() thì components vẫn bị render lại dù cho có sử dụng useCallback()
