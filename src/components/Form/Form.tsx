import React, { useContext } from "react";

import { FormContainer, FormActions } from "./styled";

import InputField from "../InputField/InputField";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import { isObjectValues } from "../../utils/isObjectValues";
import { BOOKS_URL } from "../../api/api";
import { BookContext } from "../../state/contexts/booksContext";
import { InputValuesContext } from "../../state/contexts/inputValuesContext";
import { SelectedBookContext } from "../../state/contexts/selectedBookContext";

const initInputValues = {
  title: "",
  author: "",
  description: "",
};

const initSelectedBook = {
  id: "",
  title: "",
  author: "",
  description: "",
};

const Form = () => {
  const [booksState, setBooksState] = useContext(BookContext);
  const [inputValues, setInputValues] = useContext(InputValuesContext);
  const [selectedBook, setSelectedBook] = useContext(SelectedBookContext);
  const isSelected = isObjectValues(selectedBook);

  const handleChange = (event: any) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleSaveNew = async () => {
    if (isObjectValues(inputValues)) {
      const newBook = JSON.stringify(inputValues);
      const response = await fetch(BOOKS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newBook,
      });
      const { data, message } = await response.json();
      const newState = { ...booksState };
      newState.books.push(data);
      setBooksState(newState);
      clear();
      alert(message);
    } else {
      alert("Invalid input values");
    }
  };

  const handleSave = async () => {
    if (isObjectValues(inputValues) && isSelected) {
      const updatedBook = JSON.stringify({
        id: selectedBook.id,
        ...inputValues,
      });
      const response = await fetch(BOOKS_URL, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: updatedBook,
      });
      const { data, message } = await response.json();
      setBooksState({ ...booksState, books: data, loading: false });
      clear();
      alert(message);
    } else {
      alert("Invalid input values");
    }
  };

  const handleDelete = async () => {
    if (isSelected) {
      const deletedBook = JSON.stringify({ id: selectedBook.id });
      const response = await fetch(BOOKS_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: deletedBook,
      });
      const { data, message } = await response.json();
      setBooksState({ ...booksState, books: data, loading: false });
      clear();
      alert(message);
    } else {
      alert("No book selected");
    }
  };

  const clear = () => {
    setInputValues(initInputValues);
    setSelectedBook(initSelectedBook);
  };
  return (
    <FormContainer>
      <InputField
        label="Title"
        name="title"
        handleChange={handleChange}
        value={inputValues.title}
      />
      <InputField
        label="Author"
        name="author"
        handleChange={handleChange}
        value={inputValues.author}
      />
      <TextField
        label="Description"
        name="description"
        rows={4}
        handleChange={handleChange}
        value={inputValues.description}
      />
      <FormActions>
        <Button label="Save New" handleClick={handleSaveNew} />
        <Button label="Save" handleClick={handleSave} disabled={!isSelected} />
        <Button
          label="Delete"
          handleClick={handleDelete}
          disabled={!isSelected}
        />
      </FormActions>
    </FormContainer>
  );
};

export default Form;
