import React from 'react';

const LoginLink = ({ inUpClick }) => (
  <div className="signup-link">
    <p className="in-out"> 
      Already have an account? {" "}
      <a href="#" onClick={inUpClick}>Log In Here</a>
    </p>
  </div>
);

export default LoginLink;