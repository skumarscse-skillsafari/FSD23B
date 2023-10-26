import { useReducer } from "react";

const Counter = () => {
  // Syntax
  // useReducer(reducerFunction, initialValue) => returns array of [stateVariable, dispatchFunction]
  // const [stateVariable, dispatchFunction] = useReducer(reducerFunction, initialValue)
  // stateVariable = initialValue
  // reducerFunction(stateVariable, actionObject)
  // actionObject => { type:..., payload?:...}
  // dispatchFunction({type:...})
  const reducerFun = (stateVar, action) => {
    console.log(stateVar);
    console.log(action); // { type: ...}
    switch (action.type) {
      case "INCREMENT":
        return { count: stateVar.count + 1 };

      case "DECREMENT":
        return { count: stateVar.count - 1 };

      case "RESET":
        return { count: 0 };

      default:
        return stateVar;
    }
  };
  let initialValue = { count: 0 };
  let [stateVar, dispatchFunction] = useReducer(reducerFun, initialValue);

  return (
    <div>
      <h2>Counter Component</h2>
      <h3>{stateVar.count}</h3>
      <button onClick={() => dispatchFunction({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      <button onClick={() => dispatchFunction({ type: "DECREMENT" })}>
        Decrement
      </button>{" "}
      <button onClick={() => dispatchFunction({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
