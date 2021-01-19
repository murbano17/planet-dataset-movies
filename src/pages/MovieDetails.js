import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import services from "../lib/AuthService";
import MovieRated from "../components/MovieRated";
import MovieDescription from "../components/MovieDescription";

export const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [isRated, setIsRated] = useState(false);
  const [movieRated, setMovieRated] = useState({});
  console.log(movieRated);

  useEffect(() => {
    let isCancelled = false;

    const getMovie = async () => {
      const movie = await getOneMovie();
      if (!isCancelled) {
        setMovie(movie);
        getFilteredMovies();
      }
    };

    getMovie();
    return () => {
      isCancelled = true;
    };
  }, [isRated]);

  const getOneMovie = async () => {
    const movie = await services.movieid(props.match.params.id);
    return movie;
  };

  const getFilteredMovies = async () => {
    const moviesRated = await services.moviesrating();
    const movieDetail = await services.movieid(props.match.params.id);
    moviesRated.filter((oneMovie) => {
      if (oneMovie.movie.id === movieDetail.id) {
        setMovieRated(oneMovie);
        setIsRated(true);
      }
    });
  };

  return (
    <>
      <MovieDescription movie={movie} />

      <MovieRated
        id={movie.id}
        setIsRated={setIsRated}
        isRated={isRated}
        movieRated={movieRated}
        setMovie={setMovie}
        setMovieRated={setMovieRated}

      />
    </>
  );
};
export default withAuth(MovieDetails);
