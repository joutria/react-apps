import "./App.css";
import "./styles.css";
import Counter from "./components/Counter";
import Spinner from "./components/Spinner";
import Angles from "./components/Angles";

function App() {
  return (
    <div className="App">
      <h1>React apps</h1>
      <div className="buttons">
        <Counter />
        <Angles />
        <Spinner />
      </div>
    </div>
  );
}

export default App;
