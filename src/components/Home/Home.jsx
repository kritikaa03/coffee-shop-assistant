import React from "react";
import "./Home.css";
import coffeeImage from "../../assets/coffee.jpg"; // Adjusted import path
import pastryImage from "../../assets/pastry.jpg"; // Adjusted import path

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={coffeeImage} alt="Delicious coffee" className="hero-image" />
        <div className="text-container">
          <h1 className="home-title">Welcome to The Coffee Corner</h1>
          <p className="home-subtitle">Your cozy place for the best coffee and pastries.</p>
        </div>
      </div>
      <div className="highlights">
        <h2 className="highlights-title">Our Highlights</h2>
        <div className="highlights-container">
          <div className="highlight-item">
            <h3>Signature Espresso</h3>
            <p>Rich and bold espresso shot to kickstart your day.</p>
          </div>
          <div className="highlight-item">
            <h3>Gourmet Pastries</h3>
            <p>Freshly baked pastries that melt in your mouth.</p>
          </div>
        </div>
      </div>
      <div className="images-section">
        <img src={pastryImage} alt="Delicious pastries" className="pastry-image" />
      </div>
    </div>
  );
};

export default Home;
