import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createUser,
  upadateUser,
  deleteUser,
} from "../Controllers/userController.js";
const router = express.Router();

// Common path => http://localhost:5000/api/v1/users

// http://localhost:5000/api/v1/users
// Getting all the users
router.get("/", getAllUsers);

// Getting single user
// http://localhost:5000/api/v1/users/:id
router.get("/:id", getSingleUser);

// Create new user
router.post("/create", createUser);

// Update
// http://localhost:5000/api/v1/users/update/:id
// id and data
router.put("/update/:id", upadateUser);

// Delete
// id and url
// http://localhost:5000/api/v1/users/delete/:id
router.delete("/delete/:id", deleteUser);

export default router;
