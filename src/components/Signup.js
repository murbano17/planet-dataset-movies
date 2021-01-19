import React from "react";
import { withAuth } from "../lib/AuthProvider";
import { useForm } from "../custom-hooks/useForm";
import { useValidationForm } from "../custom-hooks/validationForm";

const SignUp = (props) => {
  const [values, handleInputChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(props.errorMessage);
  const [handleInputValidations, message] = useValidationForm(values);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationForm = handleInputValidations(values);
    if (validationForm) {
      props.signup(values);
    }
  };
  const { firstName, lastName, email, password } = values;

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
        name="firstName"
        value={firstName}
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
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
      />
      <label className="form-sign__label" htmlFor="sign-email">
        Email <span className="form-sign__label--required">*</span>
      </label>
      <input
        type="text"
        placeholder="Email"
        id="sign-email"
        className="form-sign__input"
        name="email"
        value={email}
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
        autoComplete="none"
        value={password}
        onChange={handleInputChange}
      />
      {message && <p className="form-sign__error">{message}</p>}
      {props.errorSignup && (
        <p className="form-sign__error">{props.errorSignup}</p>
      )}
      <button className="btn btn-secondary" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default withAuth(SignUp);
