import { Component } from "react";

import "./State.css";

class State extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increaseCount() {
    this.setState((prevValue) => {
      return { count: prevValue.count + 1 };
    });
    console.log("The count is", this.state.count);
  }

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.increaseCount.bind(this)}>Increase Count</button>
        <section>{this.state.count}</section>
      </div>
    );
  }
}

export default State;
