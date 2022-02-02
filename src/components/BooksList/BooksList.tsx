import React, { useContext } from "react";

import { BookListContainer } from "./styled";

import BookItem from "../BookItem/BookItem";

import { BookContext } from "../../state/contexts/booksContext";

const BooksList = () => {
  const [booksState, setBooksState] = useContext(BookContext);
  const isBooks = booksState.books.length;

  return (
    <BookListContainer>
      {isBooks &&
        booksState.books.map((book, index) => (
          <BookItem book={book} key={index} />
        ))}
    </BookListContainer>
  );
};

export default BooksList;
