import { useState, useMemo } from "react";

import "../State.css";

const UseMemoDemo = () => {
  const findDoubleSlowly = (number) => {
    console.log("In slow function");
    for (let i = 0; i < 100000000; i++) {}
    return number * 2;
  };
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const doubleNumber = useMemo(() => {
    return findDoubleSlowly(number);
  }, [number]);

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
      <h1>Welcome {name}</h1>
    </div>
  );
};

export default UseMemoDemo;
