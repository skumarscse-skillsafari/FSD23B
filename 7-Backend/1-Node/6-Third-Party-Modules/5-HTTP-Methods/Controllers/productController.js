import { products } from "../data.js";

export const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

export const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findProduct });
  }
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    const filteredProducts = products.filter(
      (product) => product.id !== Number(id)
    );
    if (filteredProducts.length <= 0) {
      res.status(200).json({ success: true, message: `No products found` });
    } else {
      res.status(200).json({ success: true, data: filteredProducts });
    }
  }
};
