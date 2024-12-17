import React, { useState } from "react";
import "./style.css";

function LoginUser(props) {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username")) || ""
  );

  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("password")) || ""
  );

  const [active, setActive] = useState(true); // State để hiển thị form
  const [users, setUsers] = useState([]); // State lưu danh sách user với password

  // Xử lý sự kiện nhập liệu username
  const handleUsername = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", JSON.stringify(e.target.value));
  };

  // Xử lý sự kiện nhập liệu password
  const handlePassword = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", JSON.stringify(e.target.value));
  };

  // Xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Thêm user vào modal
  const handleAddUser = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      setUsers([...users, { username, password }]); // Thêm object { username, password } vào danh sách
      setUsername("");
      setPassword("");
      console.log("User Added:", { username, password });
    } else {
      alert("Username và Password không được để trống!");
    }
  };

  // Xử lý login (tương tự add)
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      setUsers([...users, { username, password }]); // Thêm object { username, password }
      setUsername("");
      setPassword("");
      console.log("User Logged In:", { username, password });
    } else {
      alert("Vui lòng nhập Username và Password để đăng nhập!");
    }
  };

  // Xóa user khỏi modal
  const handleRemoveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Lọc bỏ user theo index
    setUsers(updatedUsers);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Login Account</h1>
      {active && (
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              placeholder="Nguyen Van A"
              value={username}
              onChange={handleUsername}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              placeholder="123456"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="form-control">
            <button className="login" onClick={handleLogin}>
              Login
            </button>
            <button className="addNew" onClick={handleAddUser}>
              Add
            </button>
          </div>
        </form>
      )}

      {/* Modal hiển thị danh sách user và password */}
      <div className="modal">
        <h2 className="modal-title">Information User</h2>
        <ul className="list">
          {users.map((user, index) => (
            <li key={index} className="item">
              <span>
                <strong>Username:</strong> {user.username}
                <br /> <strong>Password:</strong> {user.password}
              </span>
              {/* <button
                className="remove"
                onClick={() => handleRemoveUser(index)} // Truyền index để xóa
              >
                Remove
              </button> */}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginUser;
