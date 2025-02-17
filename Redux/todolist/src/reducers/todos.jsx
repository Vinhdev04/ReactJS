const initValue = [
  {
    id: 1,
    content: "Làm bài tập về nhà",
    completed: true,
  },
  {
    id: 2,
    content: "Đi chơi với bồ",
    completed: false,
  },
  {
    id: 3,
    content: "Chơi game cùng bandwidth",
    completed: false,
  },
  {
    id: 4,
    content: "Lại tiếp tục đi ngủ...",
    completed: false,
  },
];

const todoReducer = (state = initValue, action) => {
  // console.log(state, action);
  // khoi tao state moi
  let newState = [...state];

  switch (action.type) {
    //TODO: XỬ LÝ TRANGJT HÁI THÊM TASK
    case "ADD_TASK":
      newState = [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          completed: false, // mặc định mới tạo trạng thái là "false"
        },
      ];
      return newState;

    //TODO: XỬ LÝ VIỆC TRẠNG THÁI HOÀN THÀNH TASK
    case "COMPLETE_TASK":
      // Tìm id
      const index = newState.findIndex((item) => {
        return item.id === action.id;
      });
      // gán lại status[complete]
      newState[index].completed = true;
      console.log(newState[index]);
      return newState;

    //TODO: XỬ LÝ VIỆC RESET TRẠNG THÁI TASK
    case "RESET_TASK":
      // Tìm id
      const idx = newState.findIndex((item) => {
        return item.id === action.id;
      });
      // gán lại status[complete]
      newState[idx].completed = false;
      console.log(newState[idx]);
      return newState;

    //TODO: XỬ LÝ VIỆC XÓA TASK
    case "DELETE_TASK":
      newState = newState.filter((item) => {
        return item.id !== action.id;
      });
      return newState;

    default:
      return state;
  }
};
export default todoReducer;
