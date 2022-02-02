import React, { createContext, useState, useEffect } from "react";

import { BOOKS_URL } from "../../api/api";

import { IBook } from "../../interfaces/IBook";

type BooksContextProps = {
  books: IBook[];
  loading: boolean;
  error: string | null | unknown;
};

const initState = {
  books: [],
  loading: false,
  error: null,
};

const BookContext = createContext<
  [BooksContextProps, React.Dispatch<React.SetStateAction<BooksContextProps>>]
>([initState, () => {}]);

const BooksProvider = ({ children }: any) => {
  const [booksState, setBooksState] = useState<BooksContextProps>(initState);

  const getData = async () => {
    setBooksState({ ...booksState, loading: true });
    try {
      const response = await fetch(BOOKS_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const { data } = await response.json();

      setBooksState({ ...booksState, books: data, loading: false });
    } catch (error) {
      setBooksState({ ...booksState, error: error });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BookContext.Provider value={[booksState, setBooksState]}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BooksProvider };
