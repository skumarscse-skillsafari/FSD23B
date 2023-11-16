import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productsReducer } from "./reducers";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
      inStock: faker.helpers.arrayElement([0, 1, 3, 5, 7, 10]),
      quickDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    };
  });
  console.log(products);
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    byStock: false,
    byQuickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  //   console.log(faker);
  return (
    <Cart.Provider
      value={{ cartState, cartDispatch, productsState, productsDispatch }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
