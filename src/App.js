import { useState } from "react";

import "./App.css";
import Header from "./components/ContextDemo/Header";
import Homepage from "./components/ContextDemo/Homepage";
import AuthContext from "./store/AuthContext";
import StateReducer from "./components/ReducerDemo/StateReducer";
import StateReducerPayload from "./components/ReducerDemo/StateReducerPayload";
import UseEffectDemo from "./components/EffectDemo/UseEffectDemo";
import UseMemoDemo from "./components/MemoDemo/UseMemoDemo";
import ReferentialEquality from "./components/MemoDemo/ReferentialEquality";
import UseCallbackDemo from "./components/CallbackDemo/UseCallbackDemo";
import WithoutCustomHooks from "./components/customHooksDemo/WithoutCustomHooks";
import CustomHooks from "./components/customHooksDemo/CustomHooks";
import State from "./components/State";
import UseEffectClassBased from "./components/EffectDemo/UseEffectClassBased";
import HeaderClassBased from "./components/ContextDemo/HeaderClassBased";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {/* <Header /> */}
      <HeaderClassBased />
      <Homepage />
    </AuthContext.Provider>
    // <StateReducer />
    // <StateReducerPayload />
    // <UseEffectDemo />
    // <UseMemoDemo />
    // <ReferentialEquality />
    // <UseCallbackDemo />
    // <WithoutCustomHooks />
    // <CustomHooks />
    // <State />
  );
}

export default App;

// return <State />;
// return <RefsDemo />;
