// src/components/Services.js

// Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services and Pricing</h2>

      <div className="service">
        <h3>Dog Sitting</h3>
        <p>
          Our dog sitting services include grooming, pet care reports, exercise, and basic necessities like food and water.
        </p>
        <div className="pricing">
          <p>One Day: $35</p>
          <p>Three Days or More: $30 per day</p>
          <p>One Week or More: $25 per day</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
