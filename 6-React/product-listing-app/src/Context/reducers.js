export const cartReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    default:
      return state;
  }
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };

    default:
      return state;
  }
};
