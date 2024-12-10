import React from "react";
import { useState, useRef, useEffect } from "react";

// TODO lấy dữ liệu input khi dữ liệu thay đổi
function GetValueInput(props) {
  const [initValue, setInitValue] = useState("");
  const count = useRef(0);

  // # lấy ra element từ DOM bằng useRef(), bằng ref
  const input = useRef();

  const handleValue = (e) => {
    setInitValue(e.target.value);
    count.current += 1;
  };
  console.log(count);
  console.log(input.current);

  // # focus() vào input khi lần đầu vào web
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <input type="text" value={initValue} onChange={handleValue} ref={input} />
  );
}

export default GetValueInput;
