import React from "react";
import { useState, useRef } from "react";

function UseRef(props) {
  // # 1: sử dụng useState()
  const [count, setCount] = useState(0);

  // # 2: sử dụng useRef()
  const counter = useRef(0);

  // # 3: sử dụng Object thông thường -> Vấn đề [tương tự như callback khi nó được gọi lại thì dữ liệu sẻ được làm mới hay còn gọ là khởi tạo lại] -> ko thể lấy được giá trị sau thay đổi => useRef() sinh ra để hỗ trợ
  const countObjs = {
    current: 0,
  };

  // TODO: useRef()
  const handleClick = () => {
    // # với count != count -> useState() làm cho components render lại giao diện
    setCount(count + 1);

    // # với counter.current += 1 -> useRef() chỉ tăng giá trị mà không render lại
    counter.current += 1;

    // # với countObjs.current += 1 -> useRef() chỉ tăng giá trị mà không render lại
    countObjs.current += 1;
  };

  console.log("Count: ", count);
  console.log("Counter: ", counter);
  console.log("CountObjs: ", countObjs);
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseRef;
