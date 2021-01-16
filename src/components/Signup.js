import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";

const SignUp = (props) => {
  const formContact = { firstName: "", lastName: "", email: "", password: "" };

  const [user, setUser] = useState(formContact);
  console.log(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.signup(user);
    setUser(formContact);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form className="form-sign" onSubmit={handleFormSubmit}>
      <label className="form-sign__label" htmlFor="sign-first-name">
        First name:
      </label>
      <input
        placeholder="First Name"
        id="sign-first-name"
        className="form-sign__input"
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />

      <label className="form-sign__label" htmlFor="sign-last-name">
        Last name:
      </label>
      <input
        placeholder="Last Name"
        id="sign-last-name"
        className="form-sign__input"
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <label className="form-sign__label" htmlFor="sign-email">
        Email:
      </label>
      <input
        placeholder="Email"
        id="sign-email"
        className="form-sign__input"
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <label className="form-sign__label" htmlFor="sign-password">
        Password:
      </label>
      <input
        placeholder="******"
        id="sign-password"
        className="form-sign__input"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default withAuth(SignUp);
