import { useEffect, useState } from "react";
import useHttp from "./hooks/useHttp";

const CustomHooks = () => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([]);
  const newPost = {
    title: post,
    userId: Date.now(),
  };
  const { error: getPostError, sendRequest: getPosts } = useHttp(
    {
      url: "https://jsonplaceholder.typicode.com/posts",
    },
    (data) => {
      console.log(data);
      setPostList(data);
    }
  );
  const { error: addPostError, sendRequest: addPost } = useHttp(
    {
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: newPost,
    },
    (data) => {
      console.log(data);
      setPost("");
    }
  );

  useEffect(() => {
    const abortController = new AbortController();

    getPosts();
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
      {getPostError && <p>{getPostError}</p>}
      {addPostError && <p>{addPostError}</p>}
      {postList.length > 0 &&
        postList.map((post) => (
          <div key={post.id}>
            {post.id} {post.title}
          </div>
        ))}
    </div>
  );
};

export default CustomHooks;
