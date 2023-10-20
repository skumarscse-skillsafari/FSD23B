import "./App.css";
import Products from "./Components/Products";
import ParentComponent from "./Components/ParentComponent";
function App() {
  return (
    <div className="App">
      <Products />
      <ParentComponent />
      {/* <hr />
      <ParentComponent />
      <hr />
      <ParentComponent /> */}
    </div>
  );
}

export default App;
