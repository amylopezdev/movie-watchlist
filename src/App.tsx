import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" />
    <Route path="/movie/:id" />
    <Route path="/watchlist" />
  </Routes>
);

export default App;
