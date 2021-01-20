import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const AnonRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Component {...props} /> : <Redirect to="/movies" />
      }
    />
  );
};

export default withAuth(AnonRoute);
