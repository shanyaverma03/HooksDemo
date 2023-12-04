import { useState } from "react";

import "./State.css";

const State = () => {
  const [selectedNumber, setSelectedNumber] = useState(
    "Please select a number"
  );
  const handleSelect = (num) => {
    setSelectedNumber(num);
    console.log("selected number is", selectedNumber);
  };
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          handleSelect("1");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleSelect("2");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleSelect("3");
        }}
      >
        3
      </button>
      <section>{selectedNumber}</section>
    </div>
  );
};

export default State;
