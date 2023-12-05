import { useState } from "react";

import "./App.css";
import Header from "./components/ContextDemo/Header";
import Homepage from "./components/ContextDemo/Homepage";
import AuthContext from "./store/AuthContext";
import StateReducer from "./components/ReducerDemo/StateReducer";
import StateReducerPayload from "./components/ReducerDemo/StateReducerPayload";
import UseEffectDemo from "./components/EffectDemo/UseEffectDemo";
import UseMemoDemo from "./components/MemoDemo/UseMemoDemo";

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
    // <StateReducerPayload />
    // <UseEffectDemo />
    <UseMemoDemo />
  );
}

export default App;

// return <State />;
// return <RefsDemo />;
