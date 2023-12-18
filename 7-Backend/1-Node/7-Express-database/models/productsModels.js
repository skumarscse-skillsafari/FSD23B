import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Title must be atleast 5 characters"],
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Description must be atleast 5 characters"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Category must be atleast 5 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;
