import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import services from "../lib/AuthService";

export const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let isCancelled = false;
    const getMovie = async () => {
      const movie = await services.movieid(props.match.params.id);
      if (!isCancelled) {
        setMovie(movie);
      }
    };
    getMovie();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="movie">
      <div className="movie__image-container">
        <img
          className="movie__image"
          src={movie.poster_url}
          alt={movie.title}
        />
      </div>
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__director">{movie.director}</p>
      <p className="movie__year-country">
        {movie.year} - {movie.country}
      </p>
      <p className="movie__description paragraph">{movie.description}</p>
    </div>
  );
};
export default withAuth(MovieDetails);
