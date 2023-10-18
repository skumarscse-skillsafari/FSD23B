import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
