// Card.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, description, buttonText, buttonLink }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href={buttonLink} className="card-button">{buttonText}</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default Card;
