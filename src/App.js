import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/theme/Layout";
import Browse from "./pages/Browse";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <div>
      {/* hello */}
      {/* new */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>

            <Route path="/browse" element={<Browse />} />
            <Route path="/search" element={<SearchResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
