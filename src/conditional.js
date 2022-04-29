import React, { Component } from "react";
import { render } from "react-dom";

class Conditional extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>
        <p>User</p>
      </div>
    ) : (
      <div>
        <p>Guest</p>
      </div>
    );
  }
}

export default Conditional;
