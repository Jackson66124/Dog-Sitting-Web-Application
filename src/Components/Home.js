// src/components/Home.js

import React from 'react';
import './Home.css';
import Card from './Card'; // Import your Card component


function Home() {
  return (
    <div className="container">
      <div className="home-content">
        <div className="motto">
          <h2>Your Dog's Happiness is Our Priority</h2>
          <p className="welcome-message">
            Providing top-notch dog sitting services to ensure your furry friends are happy and well-cared for. Contact us today!
          </p>
          {/* <a href="/about" className="cta-button">Learn More</a> */}
        </div>

        <div className="image-container">
          <img src="/dogoos.jpg" alt="Dog Sitting" />
        </div>
      </div>

      <div className="card-container">
        <Card
          title="Want to Learn More?"
          description="Explore our services, facilities, and team. Learn about what makes our dog sitting services exceptional."
          buttonText="Learn More"
          buttonLink="/about"
        />

        <Card
          title="Want Us to Take Care of Your Dog?"
          description="Book our professional dog sitting services today. Your furry friend deserves the best care!"
          buttonText="Book Now"
          buttonLink="/booking"
        />
      </div>
    </div>
  );
}

export default Home;


