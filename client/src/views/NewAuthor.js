import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import AuthorForm from "../components/AuthorForm";

const NewAuthor = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setErrors([]);
  }, []);

  const createAuthor = (authorParam) => {
    axios
      .post("http://localhost:8000/api/authors", authorParam)
      .then(() => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <Container>
      <Header currentRoute="new" />
      {errors.map((err, index) => (
        <p key={index} className="text-danger">
          {err}
        </p>
      ))}
      <AuthorForm onSubmitProp={createAuthor} />
    </Container>
  );
};

export default NewAuthor;
