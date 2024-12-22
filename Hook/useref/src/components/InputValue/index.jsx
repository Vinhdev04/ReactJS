import React, { useEffect, useRef, useState } from "react";
import "./style.css";

// #EXample:
function InputValue(props) {
  const [initValue, setInitValue] = useState("");
  // đêm số lần dữ liệu thay đổi trong hàm Onchange
  const counter = useRef(0);

  // truy xuất - lấy phần tử trong DOM thông qua thuộc tính ref = {}
  const inputRef = useRef();
  console.log(inputRef); // ban đầu kết quả sẻ là "undefined" do ko có tham số truyền vào trong useRef() sau đó mới chạy vào ref={}

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInitValue(e.target.value);
    counter.current = counter.current + 1;
  };
  console.log(counter.current);

  // chỉ focus() input trong lần đầu load
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="wrapper">
      <input
        type="text"
        value={initValue}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default InputValue;
