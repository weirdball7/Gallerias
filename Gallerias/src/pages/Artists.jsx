import React from 'react';

function Artists() {
    return (
        <section id="artists">
            <h2>Artists</h2>
            <div className="artist">
                <img src="images/artist1.jpg" alt="Artist 1" />
                <h3>Artist 1</h3>
                <p>Artist 1's bio...</p>
            </div>
            <div className="artist">
                <img src="images/artist2.jpg" alt="Artist 2" />
                <h3>Artist 2</h3>
                <p>Artist 2's bio...</p>
            </div>
            <div className="artist">
                <img src="images/artist3.jpg" alt="Artist 3" />
                <h3>Artist 3</h3>
                <p>Artist 3's bio...</p>
            </div>
        </section>
    );
}

export default Artists;

