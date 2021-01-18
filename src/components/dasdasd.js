import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const Navbar = ({ logout, isLogged, user }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <i onClick={handleClick} className={clicked ? "burger fa fa-times" : "burger fa fa-bars"}></i>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/">
            <h1 className="navbar__logo">Planet Movies</h1>
          </Link>
        </li>
        {isLogged ? (
          <>
            <li>
              <p>Hello {user.first_name}!</p>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link to="/profile">My profile</Link>
            </li>
            <li>
              <Link to="/ratings">My ratings</Link>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};
export default withAuth(Navbar);