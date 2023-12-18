import Products from "../models/productsModels.js";

// Getting all the products
export const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, message: "getAllProducts" });
};

// Getting single product
export const getSingleProduct = (req, res) => {
  res.status(200).json({ success: true, message: "getSingleProduct" });
};

// Create product
export const createProduct = (req, res) => {
  //  {title, description, price, category}
  //   console.log(req.body);
  new Products(req.body)
    .save()
    .then((product) => {
      res
        .status(201)
        .json({
          success: true,
          message: "User created successfully",
          data: product,
        });
    })
    .catch((err) => {
      res.status(400).json({
        sucess: false,
        message: `Something went wrong. Error: ${err}`,
      });
    });
};

// Update product
export const updateProduct = (req, res) => {
  res.status(200).json({ success: true, message: "updateProduct" });
};

// Delete product
export const deleteProduct = (req, res) => {
  res.status(200).json({ success: true, message: "deleteProduct" });
};
