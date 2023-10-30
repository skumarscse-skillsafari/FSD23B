import logo from "./logo.svg";
import "./App.css";
import Timer from "./Components/Timer";
import UserDetails from "./Components/UserDetails";
import Toggle from "./Components/Toggle";
import Counter from "./Components/Counter";
import DataReducer from "./Components/DataReducer";
import FetchProducts from "./Components/FetchProducts";
import Products from "./Components/ProductListing/Products";

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <UserDetails /> */}
      {/* <Toggle /> */}
      {/* <Counter /> */}
      {/* <DataReducer /> */}
      {/* <FetchProducts /> */}
      <Products />
    </div>
  );
}

export default App;
