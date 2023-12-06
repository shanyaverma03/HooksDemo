import { useState, useEffect } from "react";

import "../State.css";

const UseCallbackDemo = () => {
  const findDoubleSlowly = (number) => {
    console.log("In slow function");
    return number * 2;
  };
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const doubleNumber = findDoubleSlowly(number);

  const getName = () => {
    return ["Player", name];
  };

  useEffect(() => {
    console.log("Name has been changed");
  }, [getName]);

  return (
    <div className="wrapper">
      <label>
        Enter a number:{" "}
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>

      <h1>{doubleNumber}</h1>
      <label>
        Enter name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      {getName().map((name) => (
        <h1 key={name}> {name}</h1>
      ))}
    </div>
  );
};

export default UseCallbackDemo;
