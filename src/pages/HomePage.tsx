import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard/MovieCard";
import styles from "./HomePage.module.css";

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

  return (
    <section className={styles.page}>
      <h1 className={styles.heading}>Trending Movies</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            thumbnail={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
