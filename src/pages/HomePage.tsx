import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return <h1>Home</h1>;
};

export default HomePage;
