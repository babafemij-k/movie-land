import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";

// Components
import MovieCard from "./components/MovieCard";

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=27077067";
  const movie1 = {
    Title: "Spider-Man",
    Year: "2002",
    imdbID: "tt0145487",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  };

  // State
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Hooks
  useEffect(() => {
    searchMovies("spider man");
  }, [searchTerm]);

  // Event-handlers
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    searchMovies(searchTerm);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleChange}
        />
        <img src={SearchIcon} alt="search" onClick={handleSubmit} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              type={movie.Type}
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
