import React from "react";
import { Table, Button } from "react-bootstrap";

const AuthorList = (props) => {
  const { authors } = props;
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
                <Button className="ms-1" href={`/delete/${author._id}`}>
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
