import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Booklist() {
  return (
    <div className="booklist">
      <Book job="developer" bestSeller={true} />
    </div>
  );
}
const Book = props => {
  console.log(props);
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg";
  const title = "A Promised Land";
  const author = "Barack Obama";
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
