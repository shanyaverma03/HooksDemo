import { Component } from "react";

class UseEffectClassBased extends Component {
  constructor() {
    super();
    this.state = { option: "Posts" };
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  componentWillUnmount() {
    console.log("unmounting");
    this.controller.abort();
  }

  componentDidMount() {
    console.log("Component was mounted");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.option !== prevState.option) {
      try {
        console.log("Updating");
        this.fetchData();
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("same state");
    }
  }

  fetchData = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/${this.state.option}/1`;
      const response = await fetch(url, { signal: this.signal });
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.option}</h1>
        <button onClick={() => this.setState({ option: "Users" })}>
          Users
        </button>
        <button onClick={() => this.setState({ option: "Posts" })}>
          Posts
        </button>
        <button onClick={() => this.setState({ option: "Albums" })}>
          Albums
        </button>
      </div>
    );
  }
}

export default UseEffectClassBased;
