import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import { CartState } from "../Context/Context";
const Home = () => {
  const {
    cartState: { products },
    productsState: { byStock, byQuickDelivery, byRating, searchQuery, sort },
  } = CartState();

  const trasformProducts = () => {
    let newProducts = products;
    if (searchQuery) {
      newProducts = newProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (byRating) {
      newProducts = newProducts.filter((p) => p.ratings === byRating);
    }
    return newProducts;
  };
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col lg={3} md={4}>
          <Filter />
        </Col>
        <Col lg={9} md={8}>
          <Row className="g-3">
            {trasformProducts().map((product) => (
              <SingleProduct product={product} key={product.id} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
