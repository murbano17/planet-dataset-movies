import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const Navbar = ({ logout, isLogged }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const logoutClick = () => {
    setClicked(!clicked);
    logout();
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__logo">Planet Movies</h1>
      </Link>
      {isLogged && (
        <>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <ul className={clicked ? "navbar__menu active" : "navbar__menu"}>
            <li>
              <Link
                to="/ratings"
                className="navbar__links"
                onClick={handleClick}
              >
                My ratings
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="navbar__links"
                onClick={handleClick}
              >
                My profile
              </Link>
            </li>

            <li onClick={logoutClick}>Logout</li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default withAuth(Navbar);
