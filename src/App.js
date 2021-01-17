import React, { Component } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Switch, Redirect } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <Navbar />
            <AnonRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/movies" component={Movies} />
            <PrivateRoute path="/movie/:id" component={MovieDetails} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
