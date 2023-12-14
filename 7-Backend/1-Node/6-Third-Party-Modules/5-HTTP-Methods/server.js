import express from "express";
import userRouter from "./Routes/userRoutes.js";
import productsRouter from "./Routes/productRoutes.js";
const PORT = 5000;
const app = express();

app.use(express.static("./Client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to HTTP methods - GET, POST, PUT, DELETE</h1>");
});

// http://localhost:5000/api/v1/users
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running in : http://localhost:${PORT}`);
});
