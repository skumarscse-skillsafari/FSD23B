import { useState } from "react";
import ShowDetails from "./ShowDetails";
const Product = ({ product }) => {
  const { id, title, description, category, price, image, rating } = product;
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className={`product-${id}`}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>
        <img src={image} alt={`product-${id}`} height={150} width={150} />
      </p>
      <button onClick={() => setshowDetails((prev) => !prev)}>
        {showDetails ? "hide details..." : "show more..."}
      </button>
      {showDetails && (
        <ShowDetails category={category} price={price} rating={rating} />
      )}
      <hr />
    </div>
  );
};

export default Product;
