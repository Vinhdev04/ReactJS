import React, { useCallback, useState } from "react";
import Result from "../Result";
import "./style.css";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  // # Việc sử dụng thông thường sẻ khiến các coponent ko thay đổi vẫn bị render lại
  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  // const handleResetCounter = () => {
  //   setCounter(0);
  // };

  // TODO: Sử đụng useCallback() để tạo vùng nhớ  lưu các "function" ko cần thiết phải redner lại
  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const handleResetCounter = useCallback(() => {
    setCounter(0);
  }, []);
  return (
    <div className="container">
      <span>
        Result:
        <p>{counter}</p>
        <Result getCounter={handleClick} resetCounter={handleResetCounter} />
      </span>
    </div>
  );
}

export default Counter;
