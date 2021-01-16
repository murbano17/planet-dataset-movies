import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function AnonRoute({ component: Component, isLogged, ...rest }) {
  // devuelve un componente <Route /> donde su prop render recibe las props, y si no está logueado, devuelve el componente con sus props (history, etc.), en caso contrario, el componente <Redirect /> redirige a /private
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Component {...props} /> : <Redirect to="/movies" />
      }
    />
  );
}

export default withAuth(AnonRoute);
