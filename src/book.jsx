import React from "react";
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

export default Book;
