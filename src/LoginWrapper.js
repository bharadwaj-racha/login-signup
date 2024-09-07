import React, { useState } from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';

const LoginWrapper = () => {
  const [signUp, setSignUp] = useState(false);
  const [loginInputs, setLoginInputs] = useState([
    {
      label: "User Name",
      type: "text",
      show: true,
      validated: "",
      id: "a",
      error: "enter username",
      required: true
    }, {
      label: "Password",
      type: "password",
      show: true,
      validated: "",
      id: "b",
      error: "enter password",
      required: true
    }
  ]);

  const [signupInputs, setSignupInputs] = useState([
    {
      label: "User Name",
      type: "text",
      show: false,
      validated: "",
      id: "c",
      error: "enter username",
      required: true
    }, {
      label: "Email",
      type: "email",
      show: false,
      validated: "",
      id: "d",
      error: "enter your mail-id",
      required: true
    }, {
      label: "Password",
      type: "password",
      show: false,
      validated: "",
      id: "e",
      error: "enter password",
      required: true
    }, {
      label: "Re-Enter Password",
      type: "password",
      show: false,
      validated: "",
      id: "f",
      error: "re-enter password",
      required: true
    }
  ]);

  const inUpClick = () => {
    setSignUp(!signUp);
    animateFields("signupInputs");
    setTimeout(() => {
      animateFields("loginInputs");
    }, 100);
  };

  const animateFields = (formName) => {
    // ...
  };

  const submitForm = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    let isValid = true;
    if (signUp) {
      signupInputs.forEach((input) => {
        if (input.type === "email" && input.value !== undefined && !validateEmail(input.value)) {
          input.error = "Invalid email";
          isValid = false;
        } else if (input.type === "password" && input.value !== undefined && !validatePassword(input.value)) {
          input.error = "Password must be at least 8 characters";
          isValid = false;
        } else if (input.value === undefined || input.value === "") {
          input.error = "Field is required";
          isValid = false;
        }
        console.log(input.error);
      });
    } else {
      loginInputs.forEach((input) => {
        if (input.type === "text" && (input.value === undefined || input.value === "")) {
          input.error = "Field is required";
          isValid = false;
        } else if (input.type === "password" && input.value !== undefined && !validatePassword(input.value)) {
          input.error = "Password must be at least 8 characters";
          isValid = false;
        }
        console.log(input.error);
      });
    }
    if (!isValid) {
      setSignupInputs(signupInputs);
      setLoginInputs(loginInputs);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateField = (event, id) => {
    // ...
  };

  return (
    <div>
      <Login
        signUp={signUp}
        inputs={loginInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
        validateField={validateField}
      />
      <SignUp
        signUp={signUp}
        inputs={signupInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
        validateField={validateField}
      />
    </div>
  );
};

export default LoginWrapper;