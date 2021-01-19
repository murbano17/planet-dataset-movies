import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="cart">
      <div className="cart__img-container">
        <img className="cart__img" src={movie.poster_url} alt={movie.title} />
      </div>
      <div className='cart__info'>
      <h2 className='cart__info-title'>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>
        <button className="btn btn-tertiary">See details</button>{" "}
      </Link>
      </div>
    </div>
  );
};
export default MovieCard;
