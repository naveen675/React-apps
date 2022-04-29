import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  submit = (event) => {
    console.log("inside Submit");
    alert(`${this.state.name}`);
  };

  onchangeName = (event) => {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  };
  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onchangeName}
          />
        </div>
        <div>
          <button onClick={this.submit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
