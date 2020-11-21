import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Booklist() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
      alt="bestseller"
    />
  );
};

const Title = () => {
  return <p>A Promised Land</p>;
};

const Author = () => {
  return <p>Barack Obama</p>;
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
