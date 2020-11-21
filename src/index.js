import React from "react";
import ReactDOM from "react-dom";

function Booklist() {
 
  return (
    <div>
      <Book  />
      <Book  />
      <Book  />
      <Book  />
      <Book  />
    </div>
  );
}
const Book = () => {
  return (
    <article>
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
  return <h3>A Promised Land</h3>;
};

const Author = () => {
  return <h2>Barack Obama</h2>;
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
