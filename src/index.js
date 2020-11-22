import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

let Books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promised Land",
    author: "Barack Obama"
  },

  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
    title: "Greenlights",
    author: "Matthew McConaughey"
  },

  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
    title: "Becoming",
    author: "Michelle Obama"
  }
];

function Booklist() {
  return (
    <section className="booklist">
      {Books.map(book => {
        return (
          <div>
            <Book key={book.id} {...book} />
          </div>
        );
      })}
    </section>
  );
}
const Book = ({ img, title, author }) => {
  const logTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h3
        onMouseOver={() => {
          console.log(author);
        }}
      >
        {author}
      </h3>
      <button onClick={logTitle}>logTitle</button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
