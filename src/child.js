import React, { Component } from "react";
import Parent from "./parent";

function Child(props) {
  return <button onClick={() => props.Greet("naveen")}>Click </button>;
}

export default Child;
