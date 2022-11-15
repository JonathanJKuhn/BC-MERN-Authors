import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import AuthorForm from "../components/AuthorForm";

const EditAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        err.response.status === 404 ? navigate("/404") : console.error(err);
      });
  }, [id, navigate]);

  const updateAuthor = (authorParam) => {
    axios
      .put(`http://localhost:8000/api/authors/${id}`, authorParam)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Header currentRoute="edit" />
      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialName={author.name}
          loaded={loaded}
        />
      )}
    </Container>
  );
};

export default EditAuthor;
