import { useState } from "react";
const Timer = () => {
  // useState() => Helper functions (hooks) => manipulating the text content
  // of any html element
  // Syntax
  // const [stateVariable, stateFunction] = useState(initialValue)
  // useState(value) => return array of [variable, stateFunction]
  //   console.log(useState(1)); // [1, function()]
  let [number, setNumber] = useState(0);
  //   let [age, setAge] = useState(23);
  //   let [name, setName] = useState("John");
  //   console.log(number);

  // let number = 1;
  function increment() {
    setNumber((prev) => prev + 1);
  }

  function decrement() {
    setNumber((prev) => prev - 1);
  }

  function reset() {
    setNumber((prev) => 0);
  }
  return (
    <div>
      <h2>Timer Component</h2>
      <h3>{number}</h3>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
