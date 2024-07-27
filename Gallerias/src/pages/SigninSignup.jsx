import React from 'react';
import '../SigninSignup.css';

function SigninSignup() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
}

export default SigninSignup;
