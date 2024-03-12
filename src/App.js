
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Elements/Navbar';
import About from './Components/About/About';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Reviews from './Components/Pages/Reviews';
import Booking from './Components/Booking/Booking';
import Login from './Components/Pages/Login';
import Footer from './Components/Elements/Footer';

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














