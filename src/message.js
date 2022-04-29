import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState((prev) => ({
      count: prev.count + 1
    }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <p>count : {this.state.count}</p>
        <button onClick={() => this.incrementFive()}>Increment </button>
      </>
    );
  }
}

export default Message;
