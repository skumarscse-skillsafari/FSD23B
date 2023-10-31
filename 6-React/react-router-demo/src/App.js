// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import ProducDetails from "./Components/ProductDetails";

/*
http://localhost:3000 => Nav and Home Component
http://localhost:3000/about => About Component
http://localhost:3000/projects => Projects Component
http://localhost:3000/products => Products Component
http://localhost:3000/products/:id => ProductDetails Component
http://localhost:3000/contact => Contact Component
http://localhost:3000/error => Error Component

"/" => base or home url => http://localhost:3000

<Router>
    <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
</Router>
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProducDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
