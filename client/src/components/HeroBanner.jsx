import React from 'react';

const heroBannerBackground = {
    display: 'flex',
    backgroundImage: 'url("robert-bye-jeF-vyxytb4-unsplash 2.png")',
    backgroundSize: 'cover',
    width: '100%',
    height: '320px',
    padding: '50px',
    marginBottom: '70px',
}

const HeroBanner = () => (
    <div style={heroBannerBackground} alt="home page banner">
        <div className="hero-left-text">
            <p>No fees</p>
            <p>No minimum</p>
            <p>No deposit</p>
            <p>High interest rates</p>
        </div>

        <p className="hero-cta">Open a new savings account with Argent Bank today</p>
    </div>
);

export default HeroBanner;
