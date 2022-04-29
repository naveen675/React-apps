import React, { useState } from "react";
import ReactDom from "react-dom";
import Message from "./message";
import EventBind from "./eventBind";
import Parent from "./parent";
import Conditional from "./conditional";
import Form from "./form";
import Memo from "./memoComp";

// const element = <EventBind />;
const element = <Memo name={"naveen"} />;
ReactDom.render(element, document.getElementById("root"));
