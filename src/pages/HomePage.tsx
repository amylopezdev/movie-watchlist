import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";
import Loading from "../components/Loading/Loading";
import MovieCard from "../components/MovieCard/MovieCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section className={styles.page}>
      <h1 className={styles.heading}>Trending Movies</h1>
      <ul className={styles.grid}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              title={movie.title}
              thumbnail={movie.poster_path}
              releaseDate={movie.release_date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
