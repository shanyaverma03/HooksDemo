import { useState, useReducer } from "react";

import "../State.css";

const ACTIONS = {
  ADD_TASK: "Add task",
  TOGGLE: "Toggle",
  DELETE: "Delete",
};
const reducer = (state, action) => {
  if (action.type === ACTIONS.ADD_TASK) {
    return { tasks: [...state.tasks, createNewTask(action.payload.taskName)] };
  } else if (action.type === ACTIONS.TOGGLE) {
    return {
      tasks: state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    };
  } else if (action.type === ACTIONS.DELETE) {
    return {
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
};

const createNewTask = (name) => {
  const newTask = {
    id: Date.now(),
    name,
    isCompleted: false,
  };
  return newTask;
};

const StateReducerPayload = () => {
  const [taskName, setTaskName] = useState("");
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const taskNameChangeHandler = (event) => {
    setTaskName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, payload: { taskName } });
    setTaskName("");
  };

  const toggleHandler = (id) => {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id } });
  };

  const deleteHandler = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  };

  return (
    <div className="wrapper">
      <form onSubmit={submitHandler}>
        <label>Add task:</label>
        <input type="text" value={taskName} onChange={taskNameChangeHandler} />
        <button type="submit">Add</button>
      </form>
      {state.tasks.map((task) => (
        <span
          key={task.id}
          className={task.isCompleted ? "completed" : "notcompleted"}
        >
          {task.name}

          <button onClick={() => toggleHandler(task.id)}>Toggle</button>
          <button onClick={() => deleteHandler(task.id)}>Delete</button>
        </span>
      ))}
    </div>
  );
};

export default StateReducerPayload;
