import { useState } from "react";

const UserDetails = () => {
  let [user, setUser] = useState({
    firstName: "John",
    lastName: "Jack",
    age: 23,
    isAdmin: true,
  });
  //   console.log(user);

  function updateUser() {
    setUser((prev) => {
      return {
        ...prev,
        isAdmin: false,
      };
    });
  }
  return (
    <div>
      <h2>User Details Component</h2>
      <p>
        User Fullname: {user.firstName}, {user.lastName}
      </p>
      <p>User Age: {user.age}</p>
      <p>isAdmin?: {user.isAdmin ? "Yes" : "No"}</p>
      <button onClick={updateUser}>Disable Admin rights</button>
    </div>
  );
};

export default UserDetails;
