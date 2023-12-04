import { useState } from "react";

import classes from "./RefsDemo.module.css";

const RefsDemo = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = () => {
    console.log("Welcome", name);
    setName("");
    setPassword("");
  };
  return (
    <div className={classes.wrapper}>
      <h1>Please enter details</h1>
      <label>Name</label>
      <input type="text" onChange={nameChangeHandler} value={name} />
      <label>Password</label>
      <input
        type="password"
        onChange={passwordChangeHandler}
        value={password}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default RefsDemo;
