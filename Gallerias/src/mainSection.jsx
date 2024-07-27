import React, { useEffect } from 'react';
import './index.css'; // Ensure this path is correct

function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.card, .about-container, footer');
    elements.forEach(element => {
      observer.observe(element);
    });

    setTimeout(() => {
      document.querySelector('.hero').classList.add('fade-in');
    }, 100);

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="hero">
          <h1>Welcome to Gallerias!</h1>
          <p>
            Your middleman for everything art.
            <br />
            Explore our curated selections and find your next masterpiece.
          </p>
          <button id="signupButton">Sign up now!</button>
        </div>
      </section>
      <section className="options">
        <div className="card-container">
          <div className="card">
            <div className="cardDescription">
              <h1>Exhibitions</h1>
              <p>Discover a world of art through our curated exhibitions. From contemporary masterpieces to classic collections, find the perfect art experience tailored to your interests.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardDescription">
              <h1>Artists</h1>
              <p>Meet the artists behind your favorite pieces. Learn about their inspirations, techniques, and stories that bring their art to life. Get to know the creative minds shaping the art world.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardDescription">
              <h1>Paintings for Sale</h1>
              <p>Bring beauty and inspiration into your space with our selection of paintings for sale. Browse through a diverse range of styles and find a piece that speaks to you and complements your environment.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardDescription">
              <h1>Connecting Galleries & Artists</h1>
              <p>Facilitating seamless connections between galleries and artists, Gallerias provides a platform where art professionals can collaborate, share opportunities, and grow their networks within the art community.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-container">
          <h1>About Us</h1>
          <p>Gallerias is a platform dedicated to promoting and celebrating art. We aim to bridge the gap between art enthusiasts, galleries, and artists by providing a comprehensive resource for discovering and connecting with art. Join us in our mission to enrich the art world.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
