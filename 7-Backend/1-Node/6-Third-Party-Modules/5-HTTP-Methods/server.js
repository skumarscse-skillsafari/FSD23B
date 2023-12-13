import express from "express";
import userDetails from "./data.js";
import { v4 as uuidv4 } from "uuid";
const PORT = 5000;
const app = express();

app.use(express.static("./Client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to HTTP methods - GET, POST, PUT, DELETE</h1>");
});

// http://localhost:5000/users
// Getting all the users
app.get("/users", (req, res) => {
  res.status(200).json({ success: true, data: userDetails });
});

// Create new user
app.post("/create", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: { ...req.body, id: uuidv4() },
  });
});

// Getting single user
// http://localhost:5000/user/:id
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const findUser = userDetails.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `User with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findUser });
  }
});

// Update
// http://localhost:5000/update/:id
// id and data
app.put("/update/:id", (req, res) => {
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
});

// Delete
// id and url
// http://localhost:5000/delete/:id
app.delete("/delete/:id", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running in : http://localhost:${PORT}`);
});
