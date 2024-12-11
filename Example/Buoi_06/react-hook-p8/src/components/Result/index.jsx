import React from "react";
import { memo } from "react";

function Result(props) {
  // #  truyền qua props
  const { getCounter, resetCounter } = props;
  console.log(getCounter);

  const handleClick = () => {
    // # goị hàm từ props cha
    getCounter();
  };
  console.log("Count result "); // sử dụng để check render component

  //  TODO: vấn đề xảy ra: Biến đếm vân hoạt động đúng nhưng components "Result" render lại sau mỗi lần biến count tăng lên 1 đơn vị

  // # do props sẻ so sánh với props được truyền xuống ở components "cha" lúc đó biến coutner sẻ khác nhau -> nó sẻ tiến hành render lại ở components con

  // TODO: Sử dụng useCallback để tạo vùng nhớ lưu lại hàm handleCounter và giữ nguyên state counter

  const handleCount = () => {
    resetCounter(); // gọi hàm resetCounter từ props cha
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleCount}>Reset</button>
    </div>
  );
}

// TODO: Nếu ko có memo "components" vẫn render lại
export default memo(Result);
