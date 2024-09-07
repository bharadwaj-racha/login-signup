import React, { useState } from 'react';
import Form from './Form.js';
import LoginLink from './LoginLink.js';

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const SignUp = ({
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
      if (input.type === "email" && input.value !== undefined && !validateEmail(input.value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [input.id]: "Invalid email" }));
        isValid = false;
      } else if (input.type === "password" && input.value !== undefined && !validatePassword(input.value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [input.id]: "Password must be at least 8 characters" }));
        isValid = false;
      } else if (input.value === undefined || input.value === "") {
        setErrors((prevErrors) => ({ ...prevErrors, [input.id]: "Field is required" }));
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <div
      className={signUp
        ? "sign-up"
        : "sign-up sign-up-closed"}
    >
      <h1>Sign Up</h1>
      <hr />
      <Form
        inputs={inputs}
        submitForm={submitForm}
        validateField={validateField}
        errors={errors}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
      />
      <LoginLink inUpClick={inUpClick} />
    </div>
  );
};

export default SignUp;