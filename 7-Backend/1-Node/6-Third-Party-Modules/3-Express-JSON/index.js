const products = require("./data.js");
const express = require("express");
const app = express();
const PORT = 5000;

// home
app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>Products App</h1>
    <a href="/products">Go to products page</a>
  `);
});

// products
// http://localhost:5000/products
app.get("/products", (req, res) => {
  const limitedDetails = products.map(({ id, title, price, image }) => {
    return {
      id,
      title,
      price,
      image,
    };
  });
  res.status(200).json({ message: "success", data: limitedDetails });
});

// products/:id
// req => params : {}
// http://localhost:5000/products/1
app.get("/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    res
      .status(404)
      .json({ message: "error", data: `No product with the id: ${id}` });
  } else {
    res.status(200).json({ message: "success", data: singleProduct });
  }
});

// usecase: params
// /products/:id/rating/:rate/count/:count
// app.get("/products/:id/rating/:rate/count/:count", (req, res) => {
//   console.log(req.params);
// });

// query
// req => query : {}
// req => /api/v1/products?search="mens"&limit="5"
// http://localhost:5000/products?search=mens&limit=5
app.get("/api/v1/products", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let newProducts = [...products];
  if (search) {
    newProducts = newProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (limit) {
    newProducts = newProducts.slice(0, Number(limit));
  }
  if (newProducts.length < 1) {
    return res
      .status(200)
      .json({ message: "success", data: "No matches found" });
  }
  return res.status(200).json({ message: "success", data: newProducts });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
