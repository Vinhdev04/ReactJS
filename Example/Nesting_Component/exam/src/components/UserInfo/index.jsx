import React, { useState } from "react";
import "./style.css";
function UserInfo(props) {
  const [name, setName] = useState("Vinh");
  const [age, setAge] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAge("");
    setName("");
  };
  return (
    <>
      <div className="info">
        {" "}
        <div className="content">
          Hello <p>{name}</p>! I'm am <p>{age}</p> years old
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          required
          onChange={handleChangeName}
          value={name}
          id="name"
        />
        <label htmlFor="age">Your age: </label>
        <input
          type="text"
          required
          onChange={handleChangeAge}
          value={age}
          id="age"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}

export default UserInfo;
