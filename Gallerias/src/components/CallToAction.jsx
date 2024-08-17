// CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta">
      <h2>Join Gallerias Today</h2>
      <p>Start connecting with artists and galleries around the world.</p>
      <Link to="/signin" className="cta-button">Sign Up Now</Link>
    </section>
  );
}

export default CallToAction;