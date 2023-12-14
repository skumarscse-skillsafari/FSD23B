import { userDetails } from "../data.js";
import { v4 as uuidv4 } from "uuid";

// Getting all the users
// http://localhost:5000/users
export const getAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: userDetails });
};

// Get the single user
// http://localhost:5000/user/:id
export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const findUser = userDetails.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `User with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findUser });
  }
};

// Create the user
// http://localhost:5000/create
export const createUser = (req, res) => {
  //   console.log(req.body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: { ...req.body, id: uuidv4() },
  });
};

// Update the user
// http://localhost:5000/update
export const upadateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  // console.log(req.body);
  const findUser = userDetails.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `User with the id: ${id} not found` });
  } else {
    const updatedUsers = userDetails.map((user) => {
      if (user.id === Number(id)) {
        return {
          ...user,
          name: name,
          age: age,
          city: city,
        };
      } else {
        return user;
      }
    });
    // console.log(updatedUsers);
    res.status(200).json({ success: true, data: updatedUsers });
  }
};

// Delete the user
// http://localhost:5000/delete
export const deleteUser = (req, res) => {
  const { id } = req.params;
  let findUser = userDetails.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `User with the id: ${id} not found` });
  } else {
    const updatedUsers = userDetails.filter((user) => user.id !== Number(id));
    res.status(200).json({ success: true, data: updatedUsers });
  }
};
