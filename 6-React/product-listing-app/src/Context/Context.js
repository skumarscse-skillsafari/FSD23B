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
    cart: [
      {
        id: "ab7ddb0b-c39f-4490-98fd-06c4ba6775e9",
        name: "Fantastic Frozen Gloves",
        price: "525.00",
        image: "https://picsum.photos/seed/GOkdp/640/480",
        inStock: 5,
        quickDelivery: false,
        ratings: 1,
      },
      {
        id: "bd4de36a-9106-4914-8213-8711c3502e18",
        name: "Intelligent Metal Sausages",
        price: "378.00",
        image: "https://picsum.photos/seed/2cwWDn/640/480",
        inStock: 7,
        quickDelivery: false,
        ratings: 5,
      },
      {
        id: "54fff724-c806-493f-9eaf-ed364b6d2186",
        name: "Generic Concrete Chips",
        price: "971.00",
        image: "https://picsum.photos/seed/DMcHi/640/480",
        inStock: 5,
        quickDelivery: true,
        ratings: 3,
      },
    ],
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
