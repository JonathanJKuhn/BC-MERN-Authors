import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentRoute } = props;
  return (
    <div>
      <h1 className="fw-bold display-2">Favorite authors</h1>
      {currentRoute === "home" ? (
        <>
          <Link to="/new">Add an author</Link>
          <p className="lead fw-bold" style={{ color: "purple" }}>
            We have quotes by:
          </p>
        </>
      ) : currentRoute === "new" ? (
        <>
          <Link to="/">Home</Link>
          <p className="lead fw-bold" style={{ color: "purple" }}>
            Add a new author:
          </p>
        </>
      ) : currentRoute === "edit" ? (
        <>
          <Link to="/">Home</Link>
          <p className="lead fw-bold" style={{ color: "purple" }}>
            Edit this author:
          </p>
        </>
      ) : (
        currentRoute === "404" && (
          <>
            <Link to="/">Home</Link>
            <p className="lead fw-bold" style={{ color: "red" }}>
              We could not find the author you were looking for. Click the
              button below to add a new author to the database.
            </p>
          </>
        )
      )}
    </div>
  );
};

export default Header;
