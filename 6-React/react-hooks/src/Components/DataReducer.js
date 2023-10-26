import { useReducer } from "react";

const DataReducer = () => {
  const initialValue = [
    {
      id: 10001,
      name: "John",
      age: 23,
      isAdmin: false,
    },
    {
      id: 10002,
      name: "Jack",
      age: 20,
      isAdmin: true,
    },
    {
      id: 10003,
      name: "Mary",
      age: 25,
      isAdmin: true,
    },
  ];
  const reducerFun = (users, action) => {
    switch (action.type) {
      case "ADD USER":
        console.log("Add User");
        break;
      case "UPDATE USER":
        console.log("Update User");
        break;
      case "DELETE USER":
        console.log(action);
        console.log(users);

        return users.filter((user) => user.id !== action.id);

      default:
        console.log(users);
    }
  };
  const [users, dispatchFun] = useReducer(reducerFun, initialValue);
  // type: "ADD USER"
  // type: "DELETE USER"
  // type: "UPDATE USER"
  return (
    <div>
      <h2>DataReducer Component</h2>
      <button onClick={() => dispatchFun({ type: "ADD USER" })}>Add</button>
      <hr />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>isAdmin: {user.isAdmin ? "Yes" : "False"}</p>
            <button onClick={() => dispatchFun({ type: "UPDATE USER" })}>
              Update
            </button>{" "}
            <button
              onClick={() => {
                if (window.confirm("Are you sure to delete the user?")) {
                  dispatchFun({ type: "DELETE USER", id: user.id });
                }
              }}
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DataReducer;
