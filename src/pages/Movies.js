import React, { useEffect, useState } from "react";
import services from "../lib/AuthService";
import { withAuth } from "../lib/AuthProvider";

import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const dbMovies = await services.movies();
    setMovies(dbMovies);
  };
  return (
    <>
      <h1 className="heading__h1">Explore</h1>
      <ul className='movie__list'>
        {movies.map((movie) => {
          return (
            <li className='movie__list-item'>
              <MovieCard key={movie.id} movie={movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default withAuth(Movies);
