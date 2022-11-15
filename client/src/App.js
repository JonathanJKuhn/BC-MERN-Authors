import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Main from "./views/Main";
import NewAuthor from "./views/NewAuthor";
import EditAuthor from "./views/EditAuthor";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<NewAuthor />} path="/new" />
          <Route element={<EditAuthor />} path="/edit/:id" />
          <Route element={<NotFound />} path="/404" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
