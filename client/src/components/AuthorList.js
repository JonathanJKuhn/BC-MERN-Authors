import React from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const AuthorList = (props) => {
  const { authors, setAuthors } = props;

  const deleteAuthor = (authorId) => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then((res) => {
        setAuthors(authors.filter((author) => author._id !== authorId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr className="text-center">
          <th>Author</th>
          <th>Actions Available</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => {
          return (
            <tr key={index}>
              <td className="fw-bold" style={{ color: "purple" }}>
                {author.name}
              </td>
              <td className="text-center">
                <Button className="me-1" href={`/edit/${author._id}`}>
                  Edit
                </Button>
                <Button
                  className="ms-1"
                  onClick={() => deleteAuthor(author._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AuthorList;
