import { useState } from "react";

import "./State.css";

const State = () => {
  let count = 0;

  const increaseCount = () => {
    count++;
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
