import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
} from "../Controllers/productController.js";
const router = express.Router();

// Getting all the products
// http://localhost:5000/api/v1/products
router.get("/", getAllProducts);

// Getting single product
// http://localhost:5000/api/v1/products/:id
router.get("/:id", getSingleProduct);

// Delete the product
// http://localhost:5000/api/v1/products/:id
router.delete("/:id", deleteProduct);

export default router;
