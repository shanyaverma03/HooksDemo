import { useState, useMemo, useEffect } from "react";

import "../State.css";

const ReferentialEquality = () => {
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

  const fullName = useMemo(() => {
    return { name, date: new Date().getDate() };
  }, [name]);

  useEffect(() => {
    console.log("Name has been changed");
  }, [fullName]);

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
      <h1>Welcome {fullName.name}</h1>
      <h2>{fullName.date}</h2>
    </div>
  );
};

export default ReferentialEquality;
