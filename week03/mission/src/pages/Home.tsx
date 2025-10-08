import MoviePage from "../components/MoviePage";

export default function Home() {
  return <MoviePage category="popular" token={import.meta.env.VITE_TMDB_KEY} />;
}
