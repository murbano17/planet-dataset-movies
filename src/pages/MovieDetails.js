import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import services from "../lib/AuthService";
import MovieDescription from "../components/movie/MovieDescription";

export const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [isRated, setIsRated] = useState(false);
  const [movieRated, setMovieRated] = useState({});

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

  //comprobamos si la movie ha sido evaluada o no
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
    <div className="details-container">
      <MovieDescription
        movie={movie}
        id={movie.id}
        setIsRated={setIsRated}
        isRated={isRated}
        movieRated={movieRated}
        setMovie={setMovie}
        setMovieRated={setMovieRated}
      />
    </div>
  );
};
export default withAuth(MovieDetails);
