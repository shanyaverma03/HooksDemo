import { useEffect, useState } from "react";

import "../State.css";

const UseEffectDemo = () => {
  const [option, setOption] = useState("Posts");

  useEffect(() => {
    //Create an instance of the AbortController API to abort the fetch request
    const controller = new AbortController();
    const signal = controller.signal;
    getUsers(option, signal);
    console.log("in use effect");
    return () => {
      console.log("Cleaning up");
      controller.abort();
    };
  }, [option]);

  const getUsers = async (option, signal) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/${option}/1`;
      const response = await fetch(url, { signal });
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    }
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
