import { useState } from "react";

import classes from "./RefsDemo.module.css";

const RefsDemo = () => {
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <h1>Hello {name}</h1>
      <input type="text" onChange={nameChangeHandler} value={name} />
    </div>
  );
};

export default RefsDemo;
