import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Cart from "./Componets/Cart";
import Error from "./Componets/Error";
function App() {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
