import NavbarComponent from "./components/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CommentPage from "./pages/CommentPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CommentPage" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
