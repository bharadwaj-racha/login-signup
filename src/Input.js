import React from 'react';

const Input = ({
  label,
  type,
  show,
  validated,
  id,
  error,
  validateField,
  validateEmail,
  validatePassword,
  required
}) => (
  <div className={show ? "field field-in" : "field"}>
    <label className="label">{label}
      <i
        className={validated
          ? "fa fa-check animate-check"
          : ""}
        aria-hidden="true"
      ></i>
    </label>
    <br />
    <input
      className="input"
      required={required}
      type={type}
      onBlur={(event) => validateField(event, id, validateEmail, validatePassword)}
    />
    {error && <div className="error">{error}</div>}
  </div>
);

export default Input;