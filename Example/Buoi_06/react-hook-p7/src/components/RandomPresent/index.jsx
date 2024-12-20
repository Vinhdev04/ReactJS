import React, { useRef, useState } from "react";
import "./style.css";

//  TODO: Sử dụng useRef() -> random presents
function RandomPresent(props) {
  const present = ["Baby", "Laptop", "Iphone", "Car", "Watch", "Crush"];
  const [result, setResult] = useState("");
  const checked = useRef(0);
  const handleRandom = () => {
    if (checked.current < 4) {
      const random = Math.floor(Math.random() * present.length);
      setResult(present[random]);
      checked.current += 1;
      console.log("Random[index]: ", random);
    } else {
      alert(
        "You have received 3 presents. Please refresh the page to get more."
      );
      checked.current = 0;
      document.querySelector(".btn").classList.add("disabled");
    }
  };
  console.log("Count random: ", checked);

  return (
    <>
      <div className="center">
        <button onClick={handleRandom} className="btn">
          Random
        </button>
        <div>
          Goodluck! Get Presents:
          <span style={{ color: "red", fontWeight: "bold" }}> {result}</span>
        </div>
      </div>
    </>
  );
}

export default RandomPresent;
