const cartReducer = (state = [], action) => {
  console.log(state, action);
  let newState = [...state];
  switch (action.type) {
    //TODO: Handle add item
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1,
        },
      ];

    //TODO: Handle update item
    case "UPDATE_QUANTITY":
      const updateItem = newState.find((item) => item.id === action.id);
      updateItem.quantity = updateItem.quantity + action.quantity;
      // console.log(updateItem);
      return newState;

    //TODO: Handle delete item
    case "DELETE_ITEM":
      newState = newState.filter((item) => item.id !== action.id);
      return newState;

    //TODO: Handle delete all item
    case "DELETE_ALL":
      return [];

    default:
      return state;
  }
};
export default cartReducer;
