import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const AuthorForm = (props) => {
  const { onSubmitProp, initialName } = props;
  const [name, setName] = useState(initialName);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
    setName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-3" controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
      </Form.Group>
      <Button className="me-1" onClick={() => navigate("/")}>
        Cancel
      </Button>
      <Button className="ms-1" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AuthorForm;
