import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello"
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: "U clicked the button"
  //   });
  // }

  clickHandler = () => {
    this.setState({
      message: "U clicked the button"
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={this.clickHandler}>click</button> */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
