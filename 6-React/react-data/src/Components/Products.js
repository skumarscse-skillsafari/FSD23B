import products from "../data";
import Product from "./Product";
const Products = () => {
  console.log(products);
  //   JSX => HTML and JS
  //   let firstName = "Jack";
  //   let lastName = "John";
  //   console.log(firstName, lastName);
  return (
    <div className="products">
      <h2>Products Component</h2>
      {products.map((product, index) => {
        return <Product product={product} index={index} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
