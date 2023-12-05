import { useRef } from "react";

import classes from "./RefsDemo.module.css";

const RefsDemo = () => {
  const name = useRef();
  const password = useRef();

  const submitHandler = () => {
    console.log("Welcome", name.current.value);
    name.current.value = "";
    password.current.value = "";
  };
  return (
    <div className={classes.wrapper}>
      <h1>Please enter details</h1>
      <label>Name</label>
      <input type="text" ref={name} />
      <label>Password</label>
      <input type="password" ref={password} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default RefsDemo;
