import React, { useState } from 'react';
import axios from 'axios';

import './BookRideService.css';

function BookRideService() {
  const [userId, setUserId] = useState('');
  const [rideDetails, setRideDetails] = useState('');

  const handleBookRide = async () => {
    try {
      await axios.post('http://localhost:3001/bookride', {
        userId,
        rideDetails,
      });
      alert('Ride booked successfully');
    } catch (error) {
      console.error('Error booking ride:', error);
      alert('Error booking ride');
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
      <input
        type='text'
        placeholder='Ride Details'
        value={rideDetails}
        onChange={(e) => setRideDetails(e.target.value)}
      />
      <button onClick={handleBookRide}>Book Ride</button>
    </div>
  );
}

export default BookRideService;


