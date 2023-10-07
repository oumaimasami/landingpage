import "./App.css";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="width">
        <Articles />
        <Basket />
      </div>
    </div>
  );
}

export default App;
