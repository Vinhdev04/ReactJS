import React, { useCallback, useState } from "react";
import Result from "../Result";
function UseCallback(props) {
  const [counter, setCounter] = useState(0);

  // TODO: Sử dụng useCallback để tạo ra vùng nhớ  lưu lại hàm handleCounter (callback) và giữ nguyên state counter
  const handleCounter = useCallback(() => {
    setCounter(counter + 1);
  }, []); // sử dụng [] để khởi tạo 1 lần duy nhất
  console.log(counter);

  const handleReset = useCallback(() => {
    setCounter(0);
  }, []); // sử dụng [] để khởi tạo 1 lần duy nhất

  return (
    <>
      <div>
        Result counter:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>{counter}</span>
      </div>
      <Result getCounter={handleCounter} resetCounter={handleReset} />
    </>
  );
}

export default UseCallback;
