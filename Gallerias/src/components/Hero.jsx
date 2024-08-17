// Hero.js (using useNavigate)
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <section className="hero">
      <h1>Connect Artists with Galleries</h1>
      <p>Discover new talent and showcase your art with Gallerias</p>
      <button onClick={handleClick} className="cta-button">Get Started</button>
    </section>
  );
}

export default Hero;