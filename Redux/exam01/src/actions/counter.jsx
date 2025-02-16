// Tạo ra các action để xử lý các sự kiện của counter
export const addition = (numbers) => {
  return {
    type: "ADD",
    numbers: numbers,
  };
};

export const subtract = () => {
  return {
    type: "SUB",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
