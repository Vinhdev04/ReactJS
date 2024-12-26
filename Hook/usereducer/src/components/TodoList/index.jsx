import React, { useEffect, useReducer, useRef } from "react";
import "./style.css";

// # initValues: Khởi tạo giá trị ban đầu cho danh sách công việc (todos)
const init = [
  {
    id: Date.now() + 1, // Tạo ID duy nhất dựa trên timestamp hiện tại
    title: "Task 01",
    completed: false,
  },
  {
    id: Date.now() + 2,
    title: "Task 02",
    completed: false,
  },
  {
    id: Date.now() + 3,
    title: "Task 03",
    completed: false,
  },
];

// # function: Hàm reducer để xử lý các thay đổi trong trạng thái todos
const handleTodo = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        // Thêm một công việc mới vào cuối danh sách
        ...state,
        { id: Date.now(), title: action.value, completed: false },
      ];
    case "DELETE":
      const newItem = state.filter((todo) => todo.id !== action.id);
      // Trả về một mảng mới không có công việc bị xóa
      return newItem;
    default:
      return state;
  }
};

function TodoList(props) {
  // # useReducer(): Hook của React để quản lý trạng thái danh sách công việc (todos)
  const [todos, setTodos] = useReducer(handleTodo, init);
  console.log(todos); // In ra danh sách công việc hiện tại để kiểm tra

  // # useRef(): Hook của React để tạo tham chiếu đến phần tử input
  const inputFocus = useRef();

  // # useEffect():
  useEffect(() => {
    inputFocus.current.focus(); // Đặt focus vào input khi component được mount
  }, []);

  // # handleSubmit(): Hàm xử lý khi người dùng gửi form để thêm công việc mới
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.valueTodo.value;
    console.log(inputValue); // In ra giá trị để kiểm tra
    if (inputValue) {
      setTodos({
        type: "ADD", // Gửi hành động "ADD" để thêm một công việc mới
        value: inputValue, // Truyền tiêu đề công việc từ input
      });
      inputFocus.current.value = ""; // Xóa giá trị trong input sau khi thêm công việc
    }
  };

  // # handleDelete(): Hàm xử lý xóa một công việc
  const handleDelete = (id) => {
    console.log(id); // In ra ID của công việc sẽ bị xóa để kiểm tra
    if (todos.length > 0) {
      setTodos({
        type: "DELETE", // Gửi hành động "DELETE" để xóa công việc
        id: id, // Truyền ID của công việc cần xóa
      });
    } else {
      alert("No todo item to delete"); // Thông báo nếu không có công việc nào để xóa
    }
  };

  return (
    <div className="todo">
      <h1>TODO-LIST</h1>
      <form className="control" onSubmit={handleSubmit}>
        <input type="text" required name="valueTodo" ref={inputFocus} />{" "}
        <div>
          <button className="add">Add</button>
          {/* <button className="delete">Delete</button> */}{" "}
        </div>
      </form>
      <div className="list">
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <button onClick={() => handleDelete(todo.id)}>X</button>{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList; // Xuất component TodoList để sử dụng ở nơi khác
