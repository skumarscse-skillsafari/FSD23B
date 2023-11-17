import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col sm={8}>
          {cart.length ? (
            cart.map((c) => (
              <Card key={c.id} className="my-2">
                <Card.Body>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                      <Image
                        src={c.image}
                        roundedCircle
                        height={75}
                        width={75}
                      />
                    </Col>
                    <Col>
                      <div>{c.name}</div>
                      <div>{`Rs. ${c.price}`}</div>
                    </Col>
                    <Col>{c.ratings}</Col>
                    <Col>
                      <Form.Select
                        value={c.qty}
                        onChange={(e) =>
                          cartDispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: c.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(c.inStock)].map((_, i) => (
                          <option key={i}> {i + 1}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col className="text-center">
                      <AiFillDelete
                        className="text-danger"
                        fontSize={25}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure to remove the product?"
                            )
                          )
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: c,
                            });
                        }}
                      />
                      {console.log(c.id)}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div>
              <h2 className="mt-3 text-danger">No Product in the cart</h2>
              <a href="/">Back to home page</a>
            </div>
          )}
        </Col>
        <Col>
          <h3 sm={4}>Cart Product Pricing</h3>
          <div
            className="d-flex flex-column justify-content-around"
            style={{ minHeight: "150px" }}
          >
            <div>Subtotal: {cart.length} items</div>
            <div>Total: Rs. {total}</div>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              window.alert("Your order is successfull");
              cartDispatch({
                type: "CLEAR_CART",
              });
              navigate("/");
            }}
          >
            Proceed to Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
