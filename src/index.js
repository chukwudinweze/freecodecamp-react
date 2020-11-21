import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h1>hello world</h1>;
const Message = () => {
  return <p>hello world</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
