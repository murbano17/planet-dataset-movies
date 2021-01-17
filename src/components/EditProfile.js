import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";
import { useForm } from "../custom-hooks/useForm";

const EditProfile = (props) => {
  const [values, handleInputChange] = useForm({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    password: "",
  });
  console.log(values);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(values, 'valueshandle');
    props.editprofile(values);
  };

  const { first_name, last_name, password } = props.user;

  return (
    <div>
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
        <button className="btn btn-secondary" type="submit">
          Edit profile
        </button>
      </form>
    </div>
  );
};
export default withAuth(EditProfile);
