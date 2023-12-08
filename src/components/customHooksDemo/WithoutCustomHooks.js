import { useState, useEffect } from "react";

import "../State.css";
const WithoutCustomHooks = () => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState(null);

  const getPosts = async (signal) => {
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        signal
      );
      if (!response.ok) {
        console.log("not okay");
        throw new Error("Request failed!");
      }
      const data = await response.json();
      console.log(data);
      setPostList(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const addPost = async () => {
    setError(null);
    const newPost = {
      title: post,
      userId: Date.now(),
    };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        console.log("not okay");
        throw new Error("Request failed!");
      }
      const data = await response.json();
      console.log(data);
      setPost("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getPosts(signal);
    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setPost(e.target.value)}
        value={post}
      />
      <button onClick={() => addPost()}>Add Task</button>
      {error && <p>{error}</p>}
      {postList.length > 0 &&
        postList.map((post) => (
          <div key={post.id}>
            {post.id} {post.title}
          </div>
        ))}
    </div>
  );
};

export default WithoutCustomHooks;
