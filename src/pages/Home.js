 import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { withAuth } from "../lib/AuthProvider";

const Home = () => {
  const [signup, setSignup] = useState(true);

  const toggleHandlerSignup = () => {
    setSignup(true);
  };
  const toggleHandlerLogin = () => {
    setSignup(false);
  };

  return (
    <div className="home">
      {signup ? (
        <h2 className="home__welcome">Welcome!</h2>
      ) : (
        <h2 className="home__welcome">Welcome back!</h2>
      )}

      <div className="home__buttons-container">
        <button
          onClick={() => toggleHandlerSignup()}
          className={signup ? "btn btn-sign btn-sign--active" : "btn btn-sign"}
        >
          Sign In
        </button>
        <button
          onClick={() => toggleHandlerLogin()}
          className={signup ? "btn btn-sign" : "btn btn-sign btn-sign--active"}
        >
          Log In
        </button>
      </div>
      {signup ? <Signup /> : <Login />}
    </div>
  );
};

export default withAuth(Home);
