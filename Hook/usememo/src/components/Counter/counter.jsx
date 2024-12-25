import React, { useMemo, useState } from "react";
import { pow } from "../../helpers/pow";
import "./style.css";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  // # Một login kjo liên quan được xử lý trong component
  // dẫn đến việc render lại ko cần thiết khi kết quả trước sau vẫn như nhau
  // const value = pow();

  // TODO: sử dụng useMemo() để xử lý một "logic" ko cần thiết render lại
  const value = useMemo(() => {
    pow();
  }, []);

  return (
    <>
      <div className="container">
        <div>Result: {counter}</div>
        <button onClick={handleCounter}>Counter</button>
        <div>Pow: {value}</div>
      </div>
    </>
  );
}

export default Counter;
