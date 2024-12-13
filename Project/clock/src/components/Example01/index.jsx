import React, { useEffect, useState } from "react";
// TODO: Sử dụng useEffect để mô phỏng vòng đời
function Example01(props) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // Mount: Component đã được thêm vào DOM
    console.log("Component mounted: ");
    const timer = setInterval(() => {
      setTime(new Date()); // cập nhật thời gian mỗi giây
    }, 1000);

    // # cleanup function chạy mỗi khi component bị unmount
    return () => {
      // Hủy bỏ interval khi component bị xóa khỏi DOM
      clearInterval(timer);
      // Unmount: Component đã bị xóa
      console.log("Component Unmounted: ");
    };
  }, []); // Dependency array trống nghĩa là chỉ chạy một lần khi component mount

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Example01;
