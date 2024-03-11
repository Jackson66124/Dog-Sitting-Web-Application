// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Reviews from './Components/Reviews';
import Booking from './Components/Booking';
import Login from './Components/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;














