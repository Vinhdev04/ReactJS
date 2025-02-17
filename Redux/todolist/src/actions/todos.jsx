export const createTask = (content) => {
  return {
    type: "ADD_TASK",
    content: content,
  };
};

export const completeTask = (id) => {
  return {
    type: "COMPLETE_TASK",
    id: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    id: id,
  };
};

export const resetTask = (id) => {
  return {
    type: "RESET_TASK",
    id: id,
  };
};
