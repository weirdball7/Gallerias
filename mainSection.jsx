function Main () {
    return(
        <main>
            <section className="hero-section">
                <div className="hero">
                    <h1>Welcome to Gallerias!</h1>
                    <p>Your middleman for everything art</p>
                    <button id="signupButton">Sign up now!</button>
                </div>
            </section>
            <section className="options">
              <div className="card-container">
                <div className="card">
                  {/* <div className="imageContainer"></div> */}
                  <div className="cardDescription">
                    <h1>Exhibitions</h1>
                    <p>Discover a world of art through our curated exhibitions, featuring works from emerging and established artists alike. Connect with the stories and inspirations behind each masterpiece.</p>
                  </div>
                </div>
                <div className="card">
                  {/* <div className="imageContainer"></div> */}
                  <div className="cardDescription">
                    <h1>Artists</h1>
                    <p>Meet the artists behind your favorite pieces. Learn about their creative journey, techniques, and the passion that drives their work. Explore profiles, portfolios, and more.</p>
                  </div>
                </div>
                <div className="card">
                  {/* <div className="imageContainer"></div> */}
                  <div className="cardDescription">
                    <h1>Paintings for sale</h1>
                    <p>Bring beauty and inspiration into your space with our selection of paintings for sale. From contemporary to classic, find the perfect piece to complement your home or office.</p>
                  </div>
                </div>
                <div className="card">
                  {/* <div className="imageContainer"></div> */}
                  <div className="cardDescription">
                    <h1>Connecting Galleries & Artists</h1>
                    <p>Facilitating seamless connections between galleries and artists, our platform serves as a bridge to foster collaborations, exhibitions, and the sale of artwork, enriching the art community.</p>
                  </div>
                </div>
              </div>
            </section>
        </main>
    );
};

export default Main;