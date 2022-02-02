import React, { useState, useContext } from "react";

import { FormContainer, FormActions } from "./styled";

import InputField from "../InputField/InputField";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import { isInputValues } from "../../utils/isInputValues";
import { BOOKS_URL } from "../../api/api";
import { BookContext } from "../../state/contexts/booksContext";
import { InputValuesContext } from "../../state/contexts/inputValuesContext";
import { SelectedBookContext } from "../../state/contexts/selectedBookContext";

const initInputValues = {
  title: "",
  author: "",
  description: "",
};

const Form = () => {
  const [booksState, setBooksState] = useContext(BookContext);
  const [inputValues, setInputValues] = useContext(InputValuesContext);
  const [selectedBook] = useContext(SelectedBookContext);

  console.log(selectedBook);

  const handleChange = (event: any) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleSaveNew = async () => {
    if (isInputValues(inputValues)) {
      const newBook = JSON.stringify(inputValues);
      const response = await fetch(BOOKS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newBook,
      });
      const { data } = await response.json();
      const newState = { ...booksState };
      newState.books.push(data);
      setBooksState(newState);
    } else {
      alert("Invalid input values");
    }
  };

  const handleSave = () => {};

  const handleDelete = () => {};

  const clear = () => {
    setInputValues(initInputValues);
  };
  return (
    <FormContainer>
      <InputField label="Title" name="title" handleChange={handleChange} />
      <InputField label="Author" name="author" handleChange={handleChange} />
      <TextField
        label="Description"
        name="description"
        rows={4}
        handleChange={handleChange}
      />
      <FormActions>
        <Button label="Save New" handleClick={handleSaveNew} />
        <Button label="Save" handleClick={handleSave} />
        <Button label="Delete" handleClick={handleDelete} />
      </FormActions>
    </FormContainer>
  );
};

export default Form;
