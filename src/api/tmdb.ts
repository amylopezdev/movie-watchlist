import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

type TrendingMoviesResponse = {
  page: number;
  results: Movie[];
};

export async function getTrendingMovies(): Promise<TrendingMoviesResponse> {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();
  return data;
}
