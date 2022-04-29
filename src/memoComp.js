import React, { Component, Fragment } from "react";

function memo(props) {
  console.log("inside memo");
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
    </React.Fragment>
  );
}

export default React.memo(memo);
