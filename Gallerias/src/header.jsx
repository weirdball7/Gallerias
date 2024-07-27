import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure this path is correct

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <h1>Gallerias</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/exhibitions">Exhibitions</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/paintings">Paintings for Sale</Link></li>
            <li><Link to="/Signin">Sign in</Link></li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </div>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/exhibitions" onClick={toggleMenu}>Exhibitions</Link></li>
              <li><Link to="/artists" onClick={toggleMenu}>Artists</Link></li>
              <li><Link to="/paintings" onClick={toggleMenu}>Paintings for Sale</Link></li>
              <li><Link to="/Signin" onClick={toggleMenu}>Sign in</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
