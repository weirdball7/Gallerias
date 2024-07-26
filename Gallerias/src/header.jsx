import React, { useState } from 'react';
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
            <li><a href="#home">Home</a></li>
            <li><a href="#exhibitions">Exhibitions</a></li>
            <li><a href="#artists">Artists</a></li>
            <li><a href="#paintings">Paintings for Sale</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </div>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#exhibitions" onClick={toggleMenu}>Exhibitions</a></li>
              <li><a href="#artists" onClick={toggleMenu}>Artists</a></li>
              <li><a href="#paintings" onClick={toggleMenu}>Paintings for Sale</a></li>
              <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
