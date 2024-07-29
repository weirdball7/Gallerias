import React from 'react';
import '../SigninSignup.css';

function SigninSignup() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <div className="form-container">
          <h1>Please Sign In</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
          <p>forgot password? <a href="#">Click me!</a></p>
          <button type="submit" className="signin-button">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SigninSignup;