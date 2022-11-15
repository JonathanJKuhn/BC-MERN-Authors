import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Main from "./views/Main";
import NewAuthor from "./views/NewAuthor";
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<NewAuthor />} path="/new" />
          <Route element={<EditAuthor />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
