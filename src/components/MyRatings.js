import React, { useState, useEffect } from "react";
import services from "../lib/AuthService";
import MovieCard from "./MovieCard";

export const MyRatings = () => {
  const [moviesRated, setMoviesRated] = useState([]);

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

  return (
    <div>
      {moviesRated.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
