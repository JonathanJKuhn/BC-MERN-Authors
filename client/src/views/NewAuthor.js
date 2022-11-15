import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import AuthorForm from "../components/AuthorForm";

const NewAuthor = () => {
  const navigate = useNavigate();

  const createAuthor = (authorParam) => {
    axios
      .post("http://localhost:8000/api/authors", authorParam)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Header currentRoute="new" />
      <AuthorForm onSubmitProp={createAuthor} />
    </Container>
  );
};

export default NewAuthor;
