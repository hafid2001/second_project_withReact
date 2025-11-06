import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <Step />
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div className="counter">
      <div className="buttons">
        <button className="btn minus" onClick={decrease}>
          -
        </button>
        <h1>Count: {count}</h1>
        <button className="btn plus" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
function Step() {
  const [step, setstep] = useState(0);

  const increase = () => setstep(step + 1);
  const decrease = () => setstep(step - 1);
  return (
    <div className="counter">
      <div className="buttons">
        <button className="btn minus" onClick={decrease}>
          -
        </button>
        <h1>Step: {step}</h1>
        <button className="btn plus" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
function Time() {}

export default App;
