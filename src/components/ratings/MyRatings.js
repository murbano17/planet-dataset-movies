import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../../lib/AuthService";
import MovieCard from "../movie/MovieCard";

export const MyRatings = () => {
  const [moviesRated, setMoviesRated] = useState([]);
  const [direction, setDirection] = useState("asc");
  const [moviesSorted, setMoviesSorted] = useState(false);
  const [moviesSortedAscDesc, setMoviesSortedAscDesc] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const getMoviesRated = async () => {
      const result = await services.moviesrated();
      if (!isCancelled) {
        setMoviesRated(result);
      }
    };
    getMoviesRated();
    return () => {
      isCancelled = true;
    };
  }, [moviesSorted]);

  const handleChange = (event) => {
    setDirection(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const moviesSorted = await services.moviesrating(direction);
    setMoviesSorted(true);
    setMoviesSortedAscDesc(moviesSorted);
  };

  return (
    <div>
      {moviesRated.length > 0 ? (
        <form onSubmit={handleFormSubmit} className="form-select">
          <div className="form-select__with-button">
            <div className="form-select__box">
              <select
                value={direction}
                onChange={handleChange}
                className="form-select__select"
              >
                <option value="asc" className="form-select__option">
                  Ascendent
                </option>
                <option value="desc" className="form-select__option">
                  Descendent
                </option>
              </select>
            </div>
            <button className="btn btn-select" type="submit">
              Sort by score
            </button>
          </div>
        </form>
      ) : (
        <div className='message__no-rated'>
          <p>No movies rated yet</p>
          <Link to="/movies"><button className='btn btn-secondary'>Explore</button></Link>
        </div>
      )}
      <ul className="movie__list">
        {!moviesSorted &&
          moviesRated.length > 0 &&
          moviesRated.map((movie) => (
            <li key={movie.id} className="movie__list-item">
              <MovieCard key={movie.id} movie={movie} />
            </li>
          ))}
      </ul>
      <ul className="movie__list">
        {moviesSorted &&
          moviesSortedAscDesc.map((movie) => (
            <li key={movie.movie.id} className="movie__list-item">
              <MovieCard movie={movie.movie} score={movie.score} />
            </li>
          ))}
      </ul>
    </div>
  );
};
