export const cartReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const productsReducer = () => {
  return "Products Reducer";
};
