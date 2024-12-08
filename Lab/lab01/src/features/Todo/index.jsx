import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      completed: false,
    },
  ];
  return (
    <>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </>
  );
}

export default TodoFeature;
