const Product = ({ product, index }) => {
  const { id, title, description, category, image, price } = product;
  return (
    <div className={`product-${index + 1}`} key={id}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>
        <img
          src={image}
          alt={`product-${index + 1}`}
          height={100}
          width={100}
        />
      </p>
      <p>Price: {price}</p>
      <hr />
    </div>
  );
};

export default Product;
