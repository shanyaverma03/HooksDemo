import { Component } from "react";

import AuthContext from "../../store/AuthContext";
import classes from "./Header.module.css";

class HeaderClassBased extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.nav}>
          <a href="/">Home</a>
          <a href="/">About</a>
          {this.context.isLoggedIn && <a href="/">Favourites</a>}
        </div>
        <div>
          {!this.context.isLoggedIn && (
            <button
              onClick={() => {
                localStorage.setItem("isLoggedIn", true);
                this.context.setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
          {this.context.isLoggedIn && (
            <button
              onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                this.context.setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default HeaderClassBased;
