import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import WrapperComponent from "./components/WrapperComponent";
import UserComponent from "./components/UserComponent";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <WrapperComponent>
        <UserComponent />
      </WrapperComponent> */}
      <Form />
    </div>
  );
}

export default App;
