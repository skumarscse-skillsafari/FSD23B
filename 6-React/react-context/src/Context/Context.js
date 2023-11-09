import { createContext, useContext, useState } from "react";

const UserDetails = createContext();

const Context = ({ children }) => {
  const userDetails = {
    name: "Jack",
    age: 23,
    isAdmin: false,
    city: "Chennai",
  };

  const [userData, setUserData] = useState(userDetails);
  return (
    <UserDetails.Provider value={{ userData, setUserData }}>
      {children}
    </UserDetails.Provider>
  );
};

export const UserState = () => {
  return useContext(UserDetails);
};

export default Context;
