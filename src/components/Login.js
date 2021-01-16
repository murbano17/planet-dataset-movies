import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";
import { useForm } from "../custom-hooks/useForm";
import { useValidationForm } from "../custom-hooks/validationForm";

const LogIn = (props) => {
  const [values, handleInputChange] = useForm({ email: "", password: "" });
  const [handleInputValidations, message] = useValidationForm(values);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationForm = handleInputValidations(values);
    if (validationForm) {
      props.login(values);
    }
  };
  const { email, password } = values;

  return (
    <form className="form-sign" onSubmit={handleFormSubmit}>
      <label className="form-sign__label" htmlFor="log-email">
        Email <span className="form-sign__label--required">*</span>
      </label>
      <input
        type="text"
        placeholder="email@email.com"
        id="log-email"
        className="form-sign__input"
        name="email"
        autoComplete="none"
        value={email}
        onChange={handleInputChange}
      />
      <label className="form-sign__label" htmlFor="log-password">
        Password <span className="form-sign__label--required">*</span>
      </label>
      <input
        type="password"
        placeholder="******"
        id="log-password"
        className="form-sign__input"
        name="password"
        autoComplete="none"
        value={password}
        onChange={handleInputChange}
      />
      {message && <p className="form-sign__error">{message}</p>}

      <button className="btn btn-secondary" type="submit">
        Log in
      </button>
    </form>
  );
};

export default withAuth(LogIn);
