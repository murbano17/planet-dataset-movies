import React, { useState, useEffect } from "react";
import services from "../lib/AuthService";
import MovieCard from "./MovieCard";

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

  return <MovieCard movie={randomUnrated} />;
};
export default RandomUnrated;
