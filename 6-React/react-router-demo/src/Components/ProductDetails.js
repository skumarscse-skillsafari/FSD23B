import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProducDetails = () => {
  console.log(useParams());
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res?.data))
      .catch((err) => console.log(err));
  }, [productId]);
  return (
    <div className="product-details">
      <h2>Product Details Component</h2>
      {product ? (
        <div>
          <p>Title: {product?.title}</p>
          <p>Description: {product?.description}</p>
          <p>Category: {product?.category}</p>
          <p>
            <img
              src={product?.image}
              alt={`product-${product?.id}`}
              height={150}
              width={150}
            />
          </p>
          <p>Price: {product?.price}</p>
          <p>Rating: {product?.rating?.rate}</p>
          <p>Count: {product?.rating?.count}</p>
        </div>
      ) : (
        <p>No Products found</p>
      )}

      <Link to="/products">Back to Products Page</Link>
    </div>
  );
};

export default ProducDetails;
