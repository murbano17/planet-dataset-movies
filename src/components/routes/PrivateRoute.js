import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default withAuth(PrivateRoute);
