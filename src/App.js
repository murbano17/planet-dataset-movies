import React, { Component } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Switch, Redirect } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Navbar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";
import MovieRated from "./components/MovieRated";
import Ratings from "./pages/Ratings";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <Navbar />
            <AnonRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/movies" component={AllMovies} />
            <PrivateRoute path="/movie/:id" component={MovieDetails} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/rate/:id" component={MovieRated} />
            <PrivateRoute exact path="/rate/:id" component={MovieRated} />
            <PrivateRoute exact path="/ratings" component={Ratings} />
            <Redirect to="/" />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
