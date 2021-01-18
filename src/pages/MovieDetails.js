import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import services from "../lib/AuthService";
import MovieRated from "../components/MovieRated";
import MovieDescription from "../components/MovieDescription";
import EditRated from "../components/EditRated";

export const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [isRated, setIsRated] = useState(false);
  const [movieRated, setMovieRated] = useState({});

  useEffect(() => {
    let isCancelled = false;

    const getMovie = async () => {
      const movie = await services.movieid(props.match.params.id);
      if (!isCancelled) {
        setMovie(movie);
      }
    };
    //filtramos si la película ya ha sido valorada o no
    const filterMovies = async () => {
      const moviesRated = await services.moviesrating();
      const movie = await services.movieid(props.match.params.id);

      moviesRated.filter((oneMovie) => {
        if (oneMovie.movie.id === movie.id && !isCancelled) {
          setIsRated(true);
          console.log(oneMovie);
          setMovieRated(oneMovie);
        }
        return;
      });
    };
    getMovie();
    filterMovies();
    return () => {
      isCancelled = true;
    };
  }, [isRated]);

  return (
    <>
      <MovieDescription movie={movie} />
      {isRated ? (
        <EditRated id={movie.id} movieRated={movieRated} />
      ) : (
        <MovieRated id={movie.id} setIsRated={setIsRated} />
      )}
    </>
  );
};
export default withAuth(MovieDetails);
