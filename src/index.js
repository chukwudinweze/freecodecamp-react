import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

let Books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promised Land",
    author: "Barack Obama"
  },

  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
    title: "Greenlights",
    author: "Matthew McConaughey"
  },
   {img:
      "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
    title: "Becoming",
    author: "Michelle Obama"
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {Books.map(book => {
        // const { img, title, author } = book;
        return (
          <div>
            <Book book={book} />
          </div>
        );
      })}
    </section>
  );
}
const Book = props => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
