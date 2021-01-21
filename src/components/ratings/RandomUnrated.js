import React, { useState, useEffect } from "react";
import services from "../../lib/AuthService";
import MovieCard from "../movie/MovieCard";

const RandomUnrated = () => {
  const [randomUnrated, setRandomUnrated] = useState({});

  useEffect(() => {
    let isCancelled = false;

    const getRandomMovieUnrated = async () => {
      const result = await services.getRandomUnrated();
      if (!isCancelled) {
        setRandomUnrated(result);
      }
    };
    getRandomMovieUnrated();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <ul className="movie__list">
      <li className="movie__list-item">
        <MovieCard movie={randomUnrated} />
      </li>
    </ul>
  );
};
export default RandomUnrated;
