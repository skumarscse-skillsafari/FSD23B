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
app.get("/users", (req, res) => {
  res.status(200).json({ success: true, data: userDetails });
});

app.post("/create", (req, res) => {
  //   console.log(req.body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: { ...req.body, id: uuidv4() },
  });
});
app.listen(PORT, () => {
  console.log(`Server is running in : http://localhost:${PORT}`);
});
