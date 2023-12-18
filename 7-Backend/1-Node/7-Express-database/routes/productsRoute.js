import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

// GET
// Getting all the products from database
// http://localhost:5000/api/v1/products
// req => res
// req => url
router.get("/", getAllProducts);

// GET
// Get single product from the database
// http://localhost:5000/api/v1/products/:id
// req => res
// req => req.url
// id => req.params
router.get("/:id", getSingleProduct);

// POST
// Create new product
// {title, description, price, category}
// http://localhost:5000/api/v1/products/create
// url, data
// url => req.url
// data => req.body => {title: "", description: "", price: , category: ""}
router.post("/create", createProduct);

// PUT
// http://localhost:5000/api/v1/products/update/:id
// Update the existing product
// url, id, data to be updated
// url => req.url
// id => req.params
// data => req.body
router.put("/update/:id", updateProduct);

// DELETE
// http://localhost:5000/api/v1/products/delete/:id
// url, id
// url => req.url
// id => req.params
router.delete("/delete/:id", deleteProduct);

export default router;
