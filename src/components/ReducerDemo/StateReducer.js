import { useReducer } from "react";

import "../State.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const reducer = (state, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  } else {
    return state;
  }
};

const StateReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseCount = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div className="wrapper">
      <button onClick={increaseCount}>Increase Count</button>

      <section>{state.count}</section>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default StateReducer;
