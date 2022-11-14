import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import AuthorList from "../components/AuthorList";

const Main = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAuthors]);
  return (
    <div>
      <Header currentRoute="home" />
      <AuthorList authors={authors} />
    </div>
  );
};

export default Main;
