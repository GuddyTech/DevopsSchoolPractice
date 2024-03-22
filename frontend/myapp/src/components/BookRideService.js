import React, { useState } from 'react';
import axios from 'axios';

import './BookRideService.css';

function BookRideService() {
  const [userId, setUserId] = useState('');
  const [rideDetails, setRideDetails] = useState('');

  const handleBookRide = async () => {
    try {
      // Make a POST request to the server
      await axios.post('http://localhost:3009/bookings', {
        userId,
        rideDetails,
      });
      // If successful, alert the user
      alert('Ride booked successfully');
    } catch (error) {
      // If an error occurs, log it to the console and alert the user
      console.error('Error booking ride:', error);
      alert('Error booking ride. Please check the console for more details.');
    }
  };

  return (
    <div className='test'>
      <h2>Book Ride Service</h2>
      <h3 className='test1'>Book Ride Service car</h3>
      <input
        type='text'
        placeholder='User ID'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <br></br> <br></br>
      <input
        type='text'
        placeholder='Ride Details'
        value={rideDetails}
        onChange={(e) => setRideDetails(e.target.value)}
      />

      <br></br> <br></br>

      <button onClick={handleBookRide}>Book Ride</button>
    </div>
  );
}

export default BookRideService;
