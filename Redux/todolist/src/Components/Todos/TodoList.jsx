import React from "react";
import { MdCheck, MdClear, MdFlipCameraAndroid } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask, resetTask } from "../../actions/todos";
import "./Todo.css";
function TodoList(props) {
  //TODO KHỞI TẠO
  const todoList = useSelector((state) => state.todoReducer);
  console.log(todoList);
  const dispatch = useDispatch();

  // TODO: Xử lý sự kiện click button hoàn thành, reset, xóa
  const handleCompleted = (id) => {
    dispatch(completeTask(id));
    console.log(id);
  };

  const handleResetTask = (id) => {
    dispatch(resetTask(id));
    console.log(id);
  };

  const handleDeleted = (id) => {
    dispatch(deleteTask(id));
    console.log(id);
  };

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li className="todo__item" key="item.id">
              {/* Nếu completed = true -> thêm class */}
              <div className="wrap">
                <p
                  className={
                    "todo__desc " + (item.completed && "todo__desc--done")
                  }
                >
                  {item.content}
                </p>
                {/* Nếu hoàn thành thì hiện button "reset" chưa hoàn thành hiện button "check" và "delete" */}
                <div className="control">
                  {item.completed ? (
                    <button className="btn-reset">
                      <MdFlipCameraAndroid
                        onClick={() => handleResetTask(item.id)}
                      />
                    </button>
                  ) : (
                    <button
                      className="btn-complete"
                      onClick={() => handleCompleted(item.id)}
                    >
                      <MdCheck />
                    </button>
                  )}
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleted(item.id)}
                  >
                    <MdClear />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
