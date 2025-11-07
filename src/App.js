import { useState } from "react";

import "./App.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setstep] = useState(1);

  const increasestep = () => setstep(step + 1);
  const decreasestep = () => setstep(step - 1);

  const [count, setCount] = useState(0);

  const increase = () => setCount(count + step);
  const decrease = () => setCount(count - step);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <div className="buttons">
        <button className="btn minus" onClick={decreasestep}>
          -
        </button>
        <h1>Step: {step}</h1>
        <button className="btn plus" onClick={increasestep}>
          +
        </button>

        <button className="btn minus" onClick={decrease}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="btn plus" onClick={increase}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count}days from today is `
            : `${Math.abs(count)}days ago was`}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
