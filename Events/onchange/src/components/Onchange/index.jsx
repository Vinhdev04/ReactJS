import React, { useState } from "react";
import "./style.css";
function Onchange(props) {
  const [name, setName] = useState("Vinh");
  const [age, setAge] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAge(Math.floor(Math.random() * 100) + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="info">
        {" "}
        Hello <p>{name}</p>! I'm am <p>{age}</p> years old
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" required onChange={handleChange} value={name} />
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Onchange;
