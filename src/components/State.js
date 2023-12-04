import { useState } from "react";

import "./State.css";

const State = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevValue) => prevValue + 1);
    console.log("The count is", count);
  };
  return (
    <div className="wrapper">
      <button onClick={increaseCount}>Increase Count</button>
      <section>{count}</section>
    </div>
  );
};

export default State;
