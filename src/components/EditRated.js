import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import services from "../lib/AuthService";

const EditRated = ({ movieRated }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(movieRated);
  }, [movie]);

  return (
    <>
      <div>
        <p>You rated this film with a score of: </p>
        <p>
          {movie.score}/5{" "}
          {[...Array(movie.score)].map((e, i) => (
            <span key={i} className="icon"></span>
          ))}
        </p>
        Do you want to edit this score?
      </div>
    </>
  );
};
export default withAuth(EditRated);
