import React, { useRef, useState } from "react";
import "./style.css";
RandomGift.propTypes = {};

function RandomGift(props) {
  const [gift, setGift] = useState("");
  // đếm số lần click bằng useRef -> tránh việc render lại component
  const counter = useRef(0);
  // # khởi tạo mảng chứa quà
  const randomGift = [
    "car",
    "pen",
    "hourse",
    "smartphone",
    "tivi",
    "keyboard",
    "tablet",
    "laptop",
  ];

  // # hàm lấy ra quà dựa trên việc random Index
  const handleClick = (e) => {
    // tối đa 3 lần random quà
    if (counter.current > 3) {
      alert(
        "Bạn đã sử dụng hết 3 lần nhận quà! Xin vui lòng quay lại vào ngày mai"
      );
      counter.current = 0;
      document.querySelector(".wrapper button").classList.add("disabled");
    } else {
      const randomIdx = Math.floor(Math.random() * randomGift.length);
      // # xét lại quà dựa theo index
      setGift(randomGift[randomIdx]);
      counter.current += 1;
    }
  };

  return (
    <div className="wrapper">
      <button onClick={handleClick}>Random Present</button>
      <p>
        Good luck! Your present is <span className="gift">{gift}</span>
      </p>
    </div>
  );
}

export default RandomGift;
