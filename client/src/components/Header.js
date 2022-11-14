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
      ) : (
        currentRoute === "edit" && (
          <>
            <Link to="/">Home</Link>
            <p className="lead fw-bold" style={{ color: "purple" }}>
              Edit this author:
            </p>
          </>
        )
      )}
    </div>
  );
};

export default Header;
