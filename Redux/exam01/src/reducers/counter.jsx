// Tạo ra reducer và xử lý logic
const counterReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return state + action.numbers;
    case "SUB":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
