import { CartState } from "../Context/Context";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ratings from "./Ratings";

const SingleProduct = ({ product }) => {
  const { cartState, cartDispatch } = CartState();
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{`Rs. ${product.price}`}</Card.Text>
          <Card.Text>
            {product.quickDelivery ? "Quick Delivery" : "Standard Delivery"}
          </Card.Text>
          <Card.Text>
            <Ratings rating={product.ratings} />
          </Card.Text>
          {cartState.cart.some((c) => c.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                if (window.confirm("Are you sure to remove the product?"))
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProduct;
