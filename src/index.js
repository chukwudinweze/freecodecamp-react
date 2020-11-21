import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>hello World</h1>
      <h3>My name is Chukwudi Nweze</h3>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
