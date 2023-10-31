import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <h2>Products Component</h2>
      {products.map((product) => {
        return (
          <div key={product.id} className={`product-${product.id}`}>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              <img
                src={product.image}
                alt={`product-${product.id}`}
                height={150}
                width={150}
              />
            </p>
            <Link to={`/products/${product?.id}`}>see more</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
