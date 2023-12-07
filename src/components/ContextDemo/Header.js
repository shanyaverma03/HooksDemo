import { useContext } from "react";

import classes from "./Header.module.css";
import AuthContext from "../../store/AuthContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };
  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <a href="/">Home</a>
        <a href="/">About</a>
        {isLoggedIn && <a href="/">Favourites</a>}
      </div>
      <div>
        {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
