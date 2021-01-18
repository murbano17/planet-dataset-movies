import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";
import { useForm } from "../custom-hooks/useForm";
import { parseInt } from "lodash";
import services from "../lib/AuthService";

const MovieRated = ({ id }) => {
  const [values, handleInputChange] = useForm({
    score: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const movieId = id;
    const entireNumber = Number(parseInt(values.score, 10));
    services.ratemovie(movieId, entireNumber);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
        <button className="btn btn-secondary margin-top" type="submit">
          Rate
        </button>
      </form>
    </>
  );
};
export default withAuth(MovieRated);
