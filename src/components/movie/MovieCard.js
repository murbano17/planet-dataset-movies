import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, score }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={score ? "card-score" : "card"}>
        <div className="card__img-container">
          <img className="card__img" src={movie.poster_url} alt={movie.title} />
        </div>
        <div className="card__info">
          <h2 className="card__info-title">{movie.title}</h2>
          {score && (
            <p>
              <span className="rating__score">{score}</span>
              <span className="rating__score-2">/5</span>
              <i className="rating__star fa fa-star" />
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
