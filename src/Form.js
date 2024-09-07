import React from 'react';
import Input from './Input.js';
import Submit from './Submit.js';

const Form = ({
  inputs,
  submitForm,
  validateField,
  errors,
  validateEmail,
  validatePassword
}) => {
  const inputsMapped = inputs.map((i) => (
    <Input
      label={i.label}
      type={i.type}
      show={i.show}
      validated={i.validated}
      id={i.id}
      error={errors[i.id]}
      validateField={validateField}
      validateEmail={validateEmail}
      validatePassword={validatePassword}
      required={i.required}
    />
  ));

  return (
    <form onSubmit={submitForm}>
      {inputsMapped}
      <Submit />
    </form>
  );
};

export default Form;