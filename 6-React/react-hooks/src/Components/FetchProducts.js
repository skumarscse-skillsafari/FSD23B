import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [showDetails, setshowDetails] = useState(false);
  /*
    useEffect(() => {...}, [dependencyArray])
    // Used to perform initial setups whenever the page gets loaded
    // Executed:
    // 1. Whenever the page gets loaded
    // 2. If there is any change in the dependency array
    useEffect(() => {
        // logic
    }, [])
    */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);
  return (
    <div className="fetch-products">
      <h2>Fetch Products</h2>
      {products.map((product) => {
        return (
          <div key={product.id} className={`product-${product.id}`}>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>
              <img
                src={product.image}
                alt={`product-${product.id}`}
                height={200}
                width={200}
              />
            </p>
            <button onClick={() => setshowDetails((prev) => !prev)}>
              show more...
            </button>
            {showDetails && <ProductDetails product={product} />}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FetchProducts;
