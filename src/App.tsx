import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchlistPage from "./pages/WatchlistPage";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
    </Routes>
  </>
);

export default App;
