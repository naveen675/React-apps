import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  Greet(name) {
    alert(`Hello Parent ${name}`);
  }

  render() {
    return <Child Greet={this.Greet} />;
  }
}

export default Parent;
