import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, onSubmit }) {
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!bookingData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!bookingData.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-() ]+$/.test(bookingData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!bookingData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(bookingData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    const currentDate = new Date();
    const selectedDate = new Date(bookingData.date);
    if (selectedDate < currentDate) {
      errors.date = 'Reservation date cannot be before today';
    }

    if (!bookingData.date) {
      errors.date = 'Please enter a reservation date';
    }

    if (!bookingData.time) {
      errors.time = 'Please select a reservation time';
    }

    if (!bookingData.guests) {
      errors.guests = 'Please enter the number of guests';
    } else if (!/^[0-9]+$/.test(bookingData.guests)) {
      errors.guests = 'Please enter a valid number of guests';
    } else if (bookingData.guests < 1 || bookingData.guests > 10) {
      errors.guests = 'Number of guests must be between 1 and 10';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const isValid = validateForm();
    if (isValid) {
      onSubmit(bookingData);
      alert('Reservation has been made!');
      setBookingData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  return (
    <form id='reservation' onSubmit={handleSubmit}>
        <div class='topicline'><h1>Reservations</h1></div>
     
        <div class='eachline'>  
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={bookingData.name} onChange={handleInputChange} />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={bookingData.phone} onChange={handleInputChange} />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={bookingData.email} onChange={handleInputChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
  
        


      
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={bookingData.date} onChange={handleInputChange} />
        {errors.date && <div className="error">{errors.date}</div>}
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select id="time" name="time" value={bookingData.time} onChange={handleInputChange}>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <div className="error">{errors.time}</div>}
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={bookingData.guests} onChange={handleInputChange} />
        {errors.guests && <div className="error">{errors.guests}</div>}
      </div>
     
      <div class='topicline'>
      <button type="submit">Submit Reservation</button>
      </div>
  
      </form>
  );
}

export default BookingForm;