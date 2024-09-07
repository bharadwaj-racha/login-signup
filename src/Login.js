import React, { useState } from 'react';
import Form from './Form.js';
import SignupLink from './SignupLink.js';

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const Login = ({
  inputs,
  signUp,
  inUpClick,
  submitForm,
  validateField
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    inputs.forEach((input) => {
      if (input.type === "text" && (input.value === undefined || input.value === "")) {
        setErrors((prevErrors) => ({ ...prevErrors, [input.id]: "Field is required" }));
        isValid = false;
      } else if (input.type === "password" && input.value !== undefined && !validatePassword(input.value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [input.id]: "Password must be at least 8 characters" }));
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <div className={signUp ? "login login-closed" : "login"}>
      <h1>Log In</h1>
      <hr />
      <Form
        inputs={inputs}
        submitForm={submitForm}
        validateField={validateField}
        errors={errors}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
      />
      <SignupLink inUpClick={inUpClick} />
    </div>
  );
};

export default Login;