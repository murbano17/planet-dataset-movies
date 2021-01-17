import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie__img-container">
        <img className="movie__img" src={movie.poster_url} alt={movie.title} />
      </div>
    </Link>
  );
};
export default MovieCard;
