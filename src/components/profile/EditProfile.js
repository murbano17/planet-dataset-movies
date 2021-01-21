import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import { useForm } from "../../custom-hooks/useForm";

const EditProfile = (props) => {
  const [message, setMessage] = useState("");

  const { first_name, last_name } = props.user;

  const [values, handleInputChange] = useForm({
    first_name,
    last_name,
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.editprofile(values);
    setMessage("* Profile edited");
  };

  return (
    <form className="form-sign" onSubmit={handleFormSubmit}>
      <label className="form-sign__label" htmlFor="sign-first-name">
        First name <span className="form-sign__label--required">*</span>
      </label>
      <input
        placeholder="First Name"
        id="sign-first-name"
        className="form-sign__input"
        type="text"
        name="first_name"
        value={values.first_name}
        onChange={handleInputChange}
      />

      <label className="form-sign__label" htmlFor="sign-last-name">
        Last name <span className="form-sign__label--required">*</span>
      </label>
      <input
        placeholder="Last Name"
        id="sign-last-name"
        className="form-sign__input"
        type="text"
        name="last_name"
        value={values.last_name}
        onChange={handleInputChange}
      />
      <label className="form-sign__label" htmlFor="sign-password">
        Password <span className="form-sign__label--required">*</span>
      </label>
      <input
        type="password"
        placeholder="******"
        id="sign-password"
        className="form-sign__input"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      {message && <p className="form-sign__sucess">{message}</p>}
      <button className="btn btn-secondary" type="submit">
        Edit profile
      </button>
    </form>
  );
};
export default withAuth(EditProfile);
