import { useState } from "react";

import "./App.css";
import Header from "./components/ContextDemo/Header";
import Homepage from "./components/ContextDemo/Homepage";
import AuthContext from "./store/AuthContext";
import StateReducer from "./components/ReducerDemo/StateReducer";
import StateReducerPayload from "./components/ReducerDemo/StateReducerPayload";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    //   <Header />
    //   <Homepage />
    // </AuthContext.Provider>
    // <StateReducer />
    <StateReducerPayload />
  );
}

export default App;

// return <State />;
// return <RefsDemo />;
