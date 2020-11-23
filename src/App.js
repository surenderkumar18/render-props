import React from "react";
import Counter from "./Counter";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import "./style.css";

export default function App() {
  return (
    <div>
      <Counter
        render={(count, increment) => (
          <CounterOne count={count} increment={increment} />
        )}
      />
      <Counter
        render={(count, increment) => (
          <CounterTwo count={count} increment={increment} />
        )}
      />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
