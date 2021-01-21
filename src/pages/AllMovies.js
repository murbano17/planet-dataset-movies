import React, { useEffect, useState } from "react";
import services from "../lib/AuthService";
import { withAuth } from "../lib/AuthProvider";

import MovieCard from "../components/movie/MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getMovies = async () => {
      const result = await services.movies();
      if (!isCancelled) {
        setMovies(result);
      }
    };
    getMovies();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <ul className="movie__list">
        {movies.map((movie) => {
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

export default withAuth(AllMovies);
