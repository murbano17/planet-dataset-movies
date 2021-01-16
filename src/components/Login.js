import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";

const LogIn = (props) => {
  const formContact = { email: "", password: "" };

  const [user, setUser] = useState(formContact);
  console.log(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.login(user);
    setUser(formContact);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form className="form-sign" onSubmit={handleFormSubmit}>
      <label className="form-sign__label" htmlFor="log-email">
        Email:
      </label>
      <input
        placeholder="email@email.com"
        id="log-email"
        className="form-sign__input"
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />

      <label className="form-sign__label" htmlFor="log-password">
        Password:
      </label>
      <input
        type="password"
        placeholder="******"
        id="log-password"
        className="form-sign__input"
        value={user.password}
        onChange={handleChange}
        name="password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default withAuth(LogIn);
