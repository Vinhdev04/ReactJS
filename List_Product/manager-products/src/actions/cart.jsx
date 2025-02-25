export const addToCart = (id, quantity = 1) => {
  return {
    type: "Add",
    id: id,
    quantity: quantity,
  };
};
