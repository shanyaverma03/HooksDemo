import { useContext } from "react";

import classes from "./Homepage.module.css";
import AuthContext from "../../store/AuthContext";

const Homepage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <div className={classes.wrapper}>
      <h1>{isLoggedIn ? "Hello" : "Please log in"}</h1>
    </div>
  );
};

export default Homepage;
