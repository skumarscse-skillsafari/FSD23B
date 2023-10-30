const ProductDetails = ({ product }) => {
  console.log(product);
  const {
    id,
    category,
    rating: { rate, count },
  } = product;
  return (
    <div className="product-details">
      <p>Product ID: {id}</p>
      <p>Category : {category}</p>
      <p>Rating: {rate}</p>
      <p>Product Count: {count}</p>
    </div>
  );
};

export default ProductDetails;
