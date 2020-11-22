import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { Books } from "./books";
import Book from "./book";

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

ReactDOM.render(<Booklist />, document.getElementById("root"));
