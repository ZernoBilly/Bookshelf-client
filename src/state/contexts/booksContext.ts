import React, { createContext, useState, useEffect } from "react";

import IBook from "../../interfaces/IBook";

type BooksContextProps = {
  books: IBook[] | [];
  error: string | null;
  loading: boolean;
};

const initState = {
  books: [],
  error: null,
  loading: false,
};

const BookContext = createContext([initState, () => null]);

const BooksProvider = ({ children }: any) => {
  const [books, setBooks] = useState<BooksContextProps>(initState);
};
