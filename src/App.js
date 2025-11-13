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

  function handlRest() {
    setCount(0);
    setstep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <div className="buttons">
          <button className="btn minus" onClick={decrease}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button className="btn plus" onClick={increase}>
            +
          </button>
        </div>
        <p className="day">
          <span
            className={count === 0 ? "today" : count > 0 ? "future" : "past"}
          >
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count}days from today is `
              : `${Math.abs(count)}days ago was`}
          </span>

          <span
            className={count === 0 ? "today" : count > 0 ? "future" : "past"}
          >
            {date.toDateString()}
          </span>
        </p>

        {count != 0 || step != 1 ? (
          <div className="buttons">
            <button onClick={handlRest}>Rest</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
