import React, { useState, useEffect } from "react";
import services from "../lib/AuthService";
import MovieCard from "./MovieCard";

export const MyRatings = () => {
  const [moviesRated, setMoviesRated] = useState([]);
  const [direction, setDirection] = useState("asc");
  const [moviesSorted, setMoviesAsc] = useState([]);
  
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
  }, []);

  const handleChange = (event) => {
    setDirection(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const moviesSorted = await services.moviesrating(direction);
    setMoviesAsc(moviesSorted);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Sort by score:</label>

        <select value={direction} onChange={handleChange}>
          <option value="asc">Ascendent</option>
          <option value="desc">Descendent</option>
        </select>
        <input type="submit" value="Submit" />
      </form>

      {moviesRated.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
