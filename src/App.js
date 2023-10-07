import "./App.css";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <Articles className="col-6" />
        <Basket className="col-3" />
      </div>
    </div>
  );
}

export default App;
