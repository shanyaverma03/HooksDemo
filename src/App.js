import { useState } from "react";

import "./App.css";
import Header from "./components/ContextDemo/Header";
import Homepage from "./components/ContextDemo/Homepage";
import AuthContext from "./store/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Header />
      <Homepage />
    </AuthContext.Provider>
  );
}

export default App;

// return <State />;
// return <RefsDemo />;
