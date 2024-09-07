import React from 'react';

const SignupLink = ({ inUpClick }) => (
  <div className="signup-link">
    <p className="in-out"> 
      Don't have an account? {" "}
      <a href="#" onClick={inUpClick}>Sign Up Here</a>
    </p>
  </div>
);

export default SignupLink;