import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Sheet from "./pages/Sheet/Sheet";
import NotFoundPage from "./pages/NotFound/NotFound";
import { UserProvider } from "./context/user";

function AppRouter() {
  return (
    <BrowserRouter>
      <main className="has-background-dark">
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/sheet" element={<Sheet />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </UserProvider>
      </main>
    </BrowserRouter>
  );
}

export default AppRouter;
