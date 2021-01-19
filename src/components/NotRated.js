import React, { useState, useEffect } from "react";
import services from "../lib/AuthService";
import MovieCard from "./MovieCard";

const NotRated = () => {
  const [moviesNotRated, setMoviesNotRated] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const getMoviesUnrated = async () => {
      const result = await services.getAllMoviesUnrated();
      if (!isCancelled) {
        setMoviesNotRated(result);
      }
    };
    getMoviesUnrated();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <ul className="movie__list">
        {moviesNotRated.map((movie) => {
          return (
            <li className="movie__list-item" key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NotRated;
