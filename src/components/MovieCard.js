import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie__img-container">
      <img className="movie__img" src={movie.poster_url} alt={movie.title} />
    </div>
  );
};
export default MovieCard;
