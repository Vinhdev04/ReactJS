import React, { useEffect, useState } from "react";
import {
  FaHandPointUp,
  FaRegBookmark,
  FaShare,
  FaUndoAlt,
} from "react-icons/fa";
import "./Counter.css";

// TODO: MINI PROJECT: ĐẾM SỐ LIKE/SHARE VẬN DỤNG "UseState"
function Counter(props) {
  // Khởi tạo state từ LocalStorage hoặc giá trị mặc định
  const [likes, setLike] = useState(
    () => JSON.parse(localStorage.getItem("like")) || 0
  );
  const [shares, setShare] = useState(
    () => JSON.parse(localStorage.getItem("share")) || 0
  );

  // const handleLike = () => {
  //   setLike(likes + 1);
  // };
  // console.log(likes);

  // const handleShare = () => {
  //   setShare(shares + 1);
  // };
  // console.log(shares);

  // const handleReset = () => {
  //   setLike(0);
  //   setShare(0);
  //   console.log(likes, shares); // in ra kết quả cuối cùng khi reset lại counter
  // };

  // TODO: TỐI ƯU VỚI VIỆC SỬ DỤNG "callback" FUNCTION TRONG "setState"

  // # Đồng bộ hóa state với LocalStorage
  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(likes));
    localStorage.setItem("share", JSON.stringify(shares));
  }, [likes, shares]);

  const handleLike = () => {
    setLike((prev) => prev + 1);
    localStorage.setItem("like", likes);
  };
  console.log(likes);

  const handleShare = () => {
    setShare((prev) => prev + 1);
    localStorage.setItem("share", shares);
  };
  console.log(shares);

  const handleReset = () => {
    setLike(() => 0);
    setShare(() => 0);
    localStorage.setItem("like", JSON.stringify(0));
    localStorage.setItem("share", JSON.stringify(0));
  };
  console.log(likes, shares);

  const handleResult = () => {
    const like = JSON.parse(localStorage.getItem("like", likes)) || 0;
    const share = JSON.parse(localStorage.getItem("share", shares)) || 0;
    alert(`Like and Share counted in LocalStorage is: ${like} and ${share}`);
  };

  return (
    <>
      {""}
      <div className="wrapper">
        <div className="content">
          <h3>Counter Like and Share</h3>
          <div className="control">
            {" "}
            <button onClick={handleLike}>
              <FaHandPointUp />
            </button>
            <button onClick={handleShare}>
              <FaShare />
            </button>
            <button onClick={handleReset}>
              <FaUndoAlt />
            </button>
            <button onClick={handleResult}>
              <FaRegBookmark />
            </button>
          </div>

          <ul style={{ fontStyle: "italic" }}>DANH SÁCH LIKE AND SHARE:</ul>
          <li>
            Tong so like: <span>{likes}</span>
          </li>
          <li>
            Tong so share: <span>{shares}</span>
          </li>
        </div>
      </div>
    </>
  );
}

export default Counter;
