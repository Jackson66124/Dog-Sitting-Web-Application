

import React, { useState } from 'react';
import './BookingForm.css';
import axios from 'axios';

const BookingForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert start time and end time to 24-hour format before sending to the server
    const startTime24 = convertTo24HourFormat(formData.startTime, formData.startTime.includes('PM'));
    const endTime24 = convertTo24HourFormat(formData.endTime, formData.endTime.includes('PM'));
  
    const formDataForServer = {
      ...formData,
      startTime: startTime24,
      endTime: endTime24,
    };
  
    console.log('Submitting form data:', formDataForServer);
  
    try {
      await axios.post('http://localhost:8080/bookings', formDataForServer);
  
      const daysBooked = calculateDaysDifference(formData.startDate, formData.endDate);
  
      // Redirect to home page
      window.location.href = 'http://localhost:3000';
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const calculateDaysDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.floor(daysDifference);
  };

  // Helper function to generate options for hours
  const generateHourOptions = () => {
    const hours = [];
    for (let i = 6; i <= 20; i++) {
      const formattedHour = `${i % 12 || 12}:00 ${i >= 12 ? 'PM' : 'AM'}`;
      hours.push(
        <option key={formattedHour} value={`${i}:00`}>
          {formattedHour}
        </option>
      );
    }
    return hours;
  };
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const convertTo24HourFormat = (timeStr, isPM) => {
    let [hours, minutes] = timeStr.split(':');
    hours = parseInt(hours, 10);
  
    if (!isPM && hours === 12) {
      // Midnight (12:00 AM)
      hours = 0;
    } else if (isPM && hours !== 12) {
      // Afternoon (1:00 PM - 11:59 PM)
      hours += 12;
    }
  
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter first and last name"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          min={getCurrentDate()}
          required
        />
      </div>

      <div>
        <label htmlFor="startTime">Drop Off Time:</label>
        <select
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Start Time
          </option>
          {generateHourOptions()}
        </select>
      </div>

      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          disabled={!formData.startDate} 
          min={formData.startDate}  // Set min attribute to startDate
          required
        />
      </div>

      <div>
        <label htmlFor="endTime">Pick Up Time:</label>
        <select
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          disabled={!formData.startDate}
          min={formData.startDate}
          required
        >
          <option value="" disabled>
            Pick Up Time
          </option>
          {generateHourOptions()}
        </select>
      </div>

      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;


    
