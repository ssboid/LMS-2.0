import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Star.css";
import "./multiselect.css";
import MultiSelect from './MultiSelect';
import Home from "./pages/Home";
import Layout from "./pages/theme/Layout";
import Browse from "./pages/Browse";
import Book from "./pages/Book";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>

            <Route path="/browse" element={<Browse />} />
            <Route path="/book" element={<Book />} />
            <Route path="/search" element={<SearchResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
