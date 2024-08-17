// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Gallerias</div>
      <nav>
        <ul>
          <li><Link to="/Gallerias">Home</Link></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/signin">Sign In / Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;