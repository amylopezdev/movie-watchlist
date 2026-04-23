import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchlistPage from "./pages/WatchlistPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MovieDetailPage />} />
    <Route path="/watchlist" element={<WatchlistPage />} />
  </Routes>
);

export default App;
