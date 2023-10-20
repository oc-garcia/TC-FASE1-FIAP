import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Sheet from "./pages/Sheet/Sheet";

function AppRouter() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sheet" element={<Sheet />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRouter;
