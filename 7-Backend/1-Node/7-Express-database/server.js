import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRoute.js";
import mongoose from "mongoose";
const app = express();
dotenv.config();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

app.use(express.static("./client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/products", productsRouter);

// http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to express application</h1>");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
