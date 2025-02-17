import React from "react";
import Input from "./Input";
import "./Todo.css";
import TodoList from "./TodoList";
Todos.propTypes = {};

function Todos(props) {
  return (
    <>
      <div className="todo">
        <Input />
        <TodoList />
      </div>
    </>
  );
}

export default Todos;
