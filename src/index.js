import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
let firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
  title: "A Promised Land",
  author: "Barack Obama"
};

let secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
  title: "Greenlights",
  author: "Matthew McConaughey"
};
function Booklist() {
  return (
    <div className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        here is the children and i am still learning
      </Book>
    </div>
  );
}
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
      <p>{children}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
