import React, { useContext } from "react";

import { BookItemContainer, BookItemTitle, BookItemSubtitle } from "./styled";

import { IBook } from "../../interfaces/IBook";
import { IInputValues } from "../../interfaces/IInputValues";
import { InputValuesContext } from "../../state/contexts/inputValuesContext";
import { SelectedBookContext } from "../../state/contexts/selectedBookContext";

type BookItemProps = {
  book: IBook;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const [inputValues, setInputValues] = useContext(InputValuesContext);
  const [, setSelectedBook] = useContext(SelectedBookContext);

  const handleClick = () => {
    const newSelectedBook: IBook = {
      id: book._id as string,
      title: book.title,
      author: book.author,
      description: book.description,
    };

    const newInputValues: IInputValues = {
      title: book.title,
      author: book.author,
      description: book.description,
    };
    setSelectedBook(newSelectedBook);
    setInputValues(newInputValues);
  };

  return (
    <BookItemContainer onClick={() => handleClick()}>
      <BookItemTitle>{book.title}</BookItemTitle>
      <BookItemSubtitle>{book.author}</BookItemSubtitle>
    </BookItemContainer>
  );
};

export default BookItem;
