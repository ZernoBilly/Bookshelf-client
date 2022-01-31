import React from "react";
import useFetch from "../../hooks/useFetch";

import { BookListContainer } from "./styled";

const BooksList = () => {
  const BOOKS_URL = "http://localhost:5003/books/";
  const { data, loading, error } = useFetch(BOOKS_URL, "GET");

  return <BookListContainer></BookListContainer>;
};

export default BooksList;
