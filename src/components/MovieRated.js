import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import { useForm } from "../custom-hooks/useForm";
import { parseInt } from "lodash";
import services from "../lib/AuthService";

const MovieRated = (props) => {
  const [values, handleInputChange] = useForm({
    score: "",
  });
  const [isRated, setIsRated] = useState(props.isRated);
  const [movieRated, setMovieRated] = useState({});

  useEffect(() => {
    setIsRated(props.isRated);
    setMovieRated(props.movieRated);
  }, [props.isRated, props.movieRated, props.id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const movieId = props.id;
    const entireNumber = Number(parseInt(values.score, 10));
    services.ratemovie(movieId, entireNumber);
    props.setIsRated(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const entireNumber = Number(parseInt(values.score, 10));

    await services.editrating(props.movieRated.id, entireNumber);
    const updateValuesMovie = await services.getrating(props.movieRated.id);

    console.log(updateValuesMovie);
    props.setMovieRated(updateValuesMovie);
    props.setIsRated(true);
  };

  return (
    <>
      {isRated ? (
        <p>
          You rated this film with a score of <span>{movieRated.score}/5</span>
        </p>
      ) : (
        <p>Rate this movie now!</p>
      )}
      <form onSubmit={isRated ? handleEditSubmit : handleFormSubmit}>
        <div className="rating">
          <input
            type="radio"
            name="score"
            id="rate-5"
            value={5}
            onChange={handleInputChange}
          />
          <label htmlFor="rate-5"></label>

          <input
            type="radio"
            name="score"
            id={"rate-4"}
            value={4}
            onChange={handleInputChange}
          />
          <label htmlFor="rate-4"></label>
          <input
            type="radio"
            name="score"
            id={"rate-3"}
            value={3}
            onChange={handleInputChange}
          />
          <label htmlFor="rate-3"></label>
          <input
            type="radio"
            name="score"
            id="rate-2"
            value={2}
            onChange={handleInputChange}
          />
          <label htmlFor="rate-2"></label>
          <input
            type="radio"
            name="score"
            id="rate-1"
            value={1}
            onChange={handleInputChange}
          />
          <label htmlFor="rate-1"></label>
        </div>
        {isRated ? (
          <button className="btn btn-secondary margin-top" type="submit">
            Update Rate
          </button>
        ) : (
          <button className="btn btn-secondary margin-top" type="submit">
            Rate
          </button>
        )}
      </form>
    </>
  );
};
export default withAuth(MovieRated);
