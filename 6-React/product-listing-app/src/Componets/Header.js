import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";

const Header = () => {
  // console.log(CartState());
  const {
    cartState: { cart },
    cartDispatch,
    productsDispatch,
  } = CartState();
  console.log(cart);
  // console.log(cartDispatch);
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid className="d-flex justify-content-around">
        <Navbar.Brand href="/">ProductListing App</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) =>
              productsDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
          <Button className="btn btn-success">Search</Button>
        </Form>
        <NavDropdown
          title={
            <>
              <FaCartShopping color="white" fontSize={25} />{" "}
              <Badge bg="success">{cart.length}</Badge>
            </>
          }
          id="navbarScrollingDropdown"
          drop="start"
        >
          {cart.map((prod) => (
            <NavDropdown.Item style={{ width: "500px" }} key={prod.id}>
              <Row className="d-flex align-items-center justify-content-around">
                <Col className="text-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    height={65}
                    width={65}
                    style={{ borderRadius: "50%" }}
                  />
                </Col>
                <Col className="w-25">
                  <p>{prod.name}</p>
                  <p>{prod.price}</p>
                </Col>
                <Col className="text-center">
                  <AiFillDelete
                    color="red"
                    fontSize={25}
                    onClick={() => {
                      if (window.confirm("Are you sure to remove the product?"))
                        cartDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        });
                    }}
                  />
                </Col>
              </Row>
              <hr />
            </NavDropdown.Item>
          ))}
          <div className="d-grid gap-2 mx-3">
            <Link className="btn btn-primary" type="button" to="/cart">
              Go to Cart
            </Link>
          </div>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
