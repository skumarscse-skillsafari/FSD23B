const ShowDetails = ({ category, price, rating }) => {
  return (
    <div>
      <h3>ShowDetails Component</h3>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Rating: {rating.rate}</p>
      <p>Count: {rating.count}</p>
    </div>
  );
};

export default ShowDetails;
