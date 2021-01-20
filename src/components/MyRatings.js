import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../lib/AuthService";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

export const MyRatings = () => {
  const [moviesRated, setMoviesRated] = useState([]);
  const [direction, setDirection] = useState("asc");
  const [moviesSorted, setMoviesSorted] = useState(false);
  const [moviesSortedAscDesc, setMoviesSortedAscDesc] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getMoviesRated = async () => {
      const result = await services.moviesrated();
      if (!isCancelled) {
        setMoviesRated(result);
      }
    };
    getMoviesRated();
    return () => {
      isCancelled = true;
    };
  }, [moviesSorted]);

  const handleChange = (event) => {
    setDirection(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const moviesSorted = await services.moviesrating(direction);
    setMoviesSorted(true);
    setMoviesSortedAscDesc(moviesSorted);
  };

  return (
    <div>
      {moviesRated.length > 0 ? (
        <form onSubmit={handleFormSubmit}>
          <label>Sort by score:</label>

          <select value={direction} onChange={handleChange}>
            <option value="asc">Ascendent</option>
            <option value="desc">Descendent</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <p>No movies rated yet</p>
          <Link to="/movies">Explore all the movies</Link>
        </div>
      )}

      {!moviesSorted &&
        moviesRated.length > 0 &&
        moviesRated.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      {moviesSorted &&
        moviesSortedAscDesc.map((movie) => (
          <>
            <MovieCard key={movie.movie.id} movie={movie.movie} />
          </>
        ))}
    </div>
  );
};
