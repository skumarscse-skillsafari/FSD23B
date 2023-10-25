import { useState } from "react";
import UserDetails from "./UserDetails";
const Toggle = () => {
  let [toggle, setToggle] = useState(true);
  function toggleFun() {
    setToggle((prev) => !prev);
  }
  return (
    <div>
      <h2>Toggle Component</h2>
      {/* <h3>{toggle ? "Toggle" : "Not Toggle"}</h3> */}
      {toggle ? <UserDetails /> : "No User found"}
      <br />
      <button onClick={toggleFun}>Toggle Button</button>
    </div>
  );
};

export default Toggle;
