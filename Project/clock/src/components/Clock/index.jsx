import React, { useEffect, useState } from "react";
import "./Clock.css";

// TODO: Project mini02: Vận dụng useState(),useEffect() viết code ứng dụng hiển thị thời gian

// Các mảng lưu trữ tháng và ngày
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

function Clock() {
  // State để lưu trữ ngày và giờ hiện tại
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Hàm cập nhật thời gian mỗi giây
    const updateClock = () => {
      setTime(new Date()); // Cập nhật thời gian
      setTimeout(updateClock, 1000); // Gọi lại chính nó sau 1 giây
    };
    // Khởi động chu kỳ
    updateClock();

    // Cleanup khi component bị hủy
    return () => clearTimeout(updateClock);
  }, []);

  // Format ngày và giờ
  if (!time || !(time instanceof Date)) return null;
  const day = days[time.getDay()];
  const date = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  // # thêm các ký tự vào đầu hoặc cuối chuỗi
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="wrapper">
      <div className="clock">
        <h3 className="clock__date">
          {day} {date} {month} {year}
        </h3>
        <ul className="clock__timer">
          <li className="hours">{hours}</li>
          <li className="point">:</li>
          <li className="minutes">{minutes}</li>
          <li className="point">:</li>
          <li className="seconds">{seconds}</li>
        </ul>
      </div>
    </div>
  );
}

export default Clock;
