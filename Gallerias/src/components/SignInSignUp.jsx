// SignInSignUp.js
import React, { useState } from 'react';
import './SignInSignUp.css';

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="sign-in-sign-up">
      <div className="form-container">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form>
          {!isSignIn && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isSignIn && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <p>
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button className="toggle-button" onClick={toggleForm}>
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignInSignUp;