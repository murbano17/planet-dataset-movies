import React from "react";
import { withAuth } from "../../lib/AuthProvider";
import MovieRated from "../ratings/MovieRated";

const MovieDescription = ({
  movie,
  setIsRated,
  isRated,
  movieRated,
  setMovie,
  setMovieRated,
}) => {
  return (
    <div className="movie-detail">

      <div className="movie-detail__image-container">
        <img
          className="movie-detail__image"
          src={movie.poster_url}
          alt={movie.title}
        />
      </div>
      <div className="movie-detail__info">
        <h3 className="movie-detail__title">{movie.title}</h3>
        <p className="movie-detail__director">{movie.director}</p>
        <p className="movie-detail__year-country">
          {movie.year} - {movie.country}
        </p>
        <p className="movie-detail__description paragraph">
          {movie.description}
        </p>
        <MovieRated
          id={movie.id}
          setIsRated={setIsRated}
          isRated={isRated}
          movieRated={movieRated}
          setMovie={setMovie}
          setMovieRated={setMovieRated}
        />
      </div>
    </div>
  );
};
export default withAuth(MovieDescription);
