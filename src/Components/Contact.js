
// Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <p className="contact-description">
        Have questions or want to inquire about our services? Fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Dog Street, Paws City</p>
      </div>
    </div>
  );
}

export default Contact;
