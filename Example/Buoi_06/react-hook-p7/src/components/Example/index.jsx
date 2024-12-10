import React from "react";
import { useState, useRef } from "react";

// TODO: SỬ DỤNG ĐỂ ĐẾM SỐ LẦN RENDER LẠI
function Example(props) {
  // # useState() -> làm cho component render lại
  const [inputValue, setInputValue] = useState("");

  //  # useRef() -> đếm số lần render lại
  const [count, setCount] = useState(0);

  const counter = useRef(0);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value); // làm cho component render lại sau mỗi lần thay đổi
    setCount(count + 1); // làm cho component render lại
    counter.current += 1;
  };

  // # log ra số lần render lại
  console.log("Render lại lần thứ: ", count);
  console.log("Render lại lần thứ: ", counter);
  console.log("Tổng số lần: ", counter.current);

  return (
    <>
      <input
        type="text"
        placeholder="Enter text..."
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
}

export default Example;
