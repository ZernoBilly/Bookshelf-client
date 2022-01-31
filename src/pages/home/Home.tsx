import React from "react";

import Form from "../../components/Form/Form";
import BooksList from "../../components/BooksList/BooksList";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <Form />
      <BooksList />
    </HomeContainer>
  );
};

export default Home;
