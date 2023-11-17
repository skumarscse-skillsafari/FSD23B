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

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
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

    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };

    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byQuickDelivery: !state.byQuickDelivery,
      };

    case "CLEAR_FILTER":
      return {
        byStock: false,
        byQuickDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
