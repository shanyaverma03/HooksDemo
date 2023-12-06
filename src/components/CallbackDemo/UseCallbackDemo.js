import { useState, useEffect, useCallback, useMemo } from "react";

import "../State.css";

const UseCallbackDemo = () => {
  const findDoubleSlowly = (number) => {
    console.log("In slow function");
    return number * 2;
  };
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const doubleNumber = useMemo(() => {
    return findDoubleSlowly(number);
  }, [number]); //returned value is stored here

  const getName = useCallback(
    (message) => {
      return ["Player", name, message];
    },
    [name]
  ); //the entire function is stored here

  useEffect(() => {
    console.log("Name has been changed");
  }, [getName]); //getName func won't change, hence won't be executed when not req

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
      {getName("useCallback is different").map((name) => (
        <h1 key={name}> {name}</h1>
      ))}
    </div>
  );
};

export default UseCallbackDemo;
