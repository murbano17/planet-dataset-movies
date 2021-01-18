import React from "react";
import { withAuth } from "../lib/AuthProvider";

const MovieDescription = ({ movie }) => {
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
export default withAuth(MovieDescription);
