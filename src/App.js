import React, { Component } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />

          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/movies" component={Movies} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
