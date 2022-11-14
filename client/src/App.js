import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Main from "./views/Main";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
