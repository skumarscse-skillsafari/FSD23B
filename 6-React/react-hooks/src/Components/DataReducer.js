import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    // { type: "DELETE USER", id: user.id}
    switch (action.type) {
      case "ADD_USER":
        // console.log(action.payload);
        return [...users, { ...action.payload, id: uuidv4() }];
      case "UPDATE_USER":
        // console.log(action.payload.id);
        return users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      case "DELETE_USER":
        console.log(action);
        console.log(users);
        return users.filter((user) => user.id !== action.payload.id);

      default:
        return users;
    }
  };
  const [users, dispatchFun] = useReducer(reducerFun, initialValue);
  console.log(users);
  // type: "ADD USER"
  // type: "DELETE USER"
  // type: "UPDATE USER"
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    age: 0,
    isAdmin: false,
  });
  // console.log(newUser);
  function updateUser(id) {
    console.log(id);
    let findUser = users.find((user) => String(user.id) === String(id));
    console.log(findUser);
    setNewUser({
      id: findUser.id,
      name: findUser.name,
      age: findUser.age,
      isAdmin: findUser.isAdmin,
    });
  }
  return (
    <div>
      <h2>DataReducer Component</h2>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter username"
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter age"
            value={newUser.age}
            onChange={(e) =>
              setNewUser((prev) => {
                return {
                  ...prev,
                  age: +e.target.value,
                };
              })
            }
          />
        </p>
        <p>
          <span>isAdmin:</span>
          <input
            type="checkbox"
            name="isAdmin"
            checked={newUser.isAdmin}
            onChange={(e) =>
              setNewUser((prev) => {
                return {
                  ...prev,
                  isAdmin: e.target.checked,
                };
              })
            }
          />
          Yes
        </p>
      </form>
      <button
        onClick={() => {
          dispatchFun({ type: "ADD_USER", payload: newUser });
          setNewUser({ id: "", name: "", age: 0, isAdmin: false });
        }}
      >
        Add
      </button>{" "}
      <button
        onClick={() => {
          dispatchFun({ type: "UPDATE_USER", payload: newUser });
          setNewUser({ id: "", name: "", age: 0, isAdmin: false });
        }}
      >
        Update
      </button>
      <hr />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>isAdmin: {user.isAdmin ? "Yes" : "False"}</p>
            <button onClick={() => updateUser(user.id)}>Update</button>{" "}
            <button
              onClick={() => {
                if (window.confirm("Are you sure to delete the user?")) {
                  dispatchFun({
                    type: "DELETE_USER",
                    payload: { id: user.id },
                  });
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
