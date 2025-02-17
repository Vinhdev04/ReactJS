import React, { useRef } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createTask } from "../../actions/todos";

function Input(props) {
  // khởi tạo
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueInput = e.target.elements.content.value;
    if (valueInput !== "") {
      console.log(e.target.elements.content.value);
      dispatch(createTask(valueInput));
      inputRef.current.value = ""; // clear data
      inputRef.current.focus(); // autofocus
    }
  };

  return (
    <>
      <div className="todo__item">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            id=""
            placeholder="Enter new task..."
            ref={inputRef}
          />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
