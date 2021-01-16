import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const Navbar = ({logout, isLogged, first_name }) => {
  return (
    <nav className="navbar">
      {isLogged ? (
        <div>
          <p>Hello {first_name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default withAuth(Navbar);
