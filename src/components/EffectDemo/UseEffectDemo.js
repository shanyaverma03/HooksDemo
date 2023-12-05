import { useEffect, useState } from "react";

import "../State.css";

const UseEffectDemo = () => {
  const [option, setOption] = useState("Posts");

  useEffect(() => {
    getUsers(option);
    console.log("in use effect");

    return () => {
      console.log("Cleaning up");
    };
  }, [option]);

  const getUsers = async (option) => {
    const url = `https://jsonplaceholder.typicode.com/${option}/1`;
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <div className="wrapper">
      <h1>{option}</h1>
      <button onClick={() => setOption("Users")}>Users</button>
      <button onClick={() => setOption("Posts")}>Posts</button>
      <button onClick={() => setOption("Albums")}>Albums</button>
    </div>
  );
};

export default UseEffectDemo;
