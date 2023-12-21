import Products from "../models/productsModels.js";

// Getting all the products
export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).json({ success: true, data: allProducts });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: `Something went wrong. Error: ${err}`,
    });
  }
};

// Getting single product
export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await Products.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: `Something went wrong. Error: ${err}`,
    });
  }
};

// Create product
export const createProduct = (req, res) => {
  //  {title, description, price, category}
  //   console.log(req.body);
  new Products(req.body)
    .save()
    .then((product) => {
      res.status(201).json({
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
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Products.findByIdAndUpdate(id, req.body);
    // console.log(result);
    res
      .status(200)
      .json({ success: true, message: "Product updated successfully" });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: `Something went wrong. Error: ${err}`,
    });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const res = await Products.findByIdAndDelete(id);
    if (res) {
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    }
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: `Something went wrong. Error: ${err}`,
    });
  }
};
