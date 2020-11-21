import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
     <Person/>
      <h3>My name is Chukwudi Nweze</h3>
    </div>
  );
}
const Person = () => <h1>hello world</h1>

ReactDOM.render(<Greeting />, document.getElementById("root"));
