import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [error, setError] = useState(null);

  const sendRequest = async (signal) => {
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        signal: signal && signal,
      });
      if (!response.ok) {
        console.log("not okay");
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return { error, sendRequest };
};

export default useHttp;
