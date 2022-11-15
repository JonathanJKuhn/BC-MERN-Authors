import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Header from "./Header";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header currentRoute="404" />
      <Button onClick={() => navigate("/new")}>Add Author</Button>
    </Container>
  );
};

export default NotFound;
