import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userId, setUserId] = useState('');
  const [rideDetails, setRideDetails] = useState('');
  const [reviewDetails, setReviewDetails] = useState('');
  const [locationData, setLocationData] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [username, setUsername] = useState('');

  const [bookRideResponse, setBookRideResponse] = useState('');
  const [submitReviewResponse, setSubmitReviewResponse] = useState('');
  const [updateMapResponse, setUpdateMapResponse] = useState('');
  const [processPaymentResponse, setProcessPaymentResponse] = useState('');
  const [signupResponse, setSignupResponse] = useState('');

  const bookRide = async () => {
    try {
      const response = await axios.post('/bookride', { userId, rideDetails });
      setBookRideResponse(response.data);
    } catch (error) {
      console.error('Error booking ride:', error);
    }
  };

  const submitReview = async () => {
    try {
      const response = await axios.post('/review/submit', { userId, reviewDetails });
      setSubmitReviewResponse(response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const updateMap = async () => {
    try {
      const response = await axios.post('/map/update', { locationData });
      setUpdateMapResponse(response.data);
    } catch (error) {
      console.error('Error updating map:', error);
    }
  };

  const processPayment = async () => {
    try {
      const response = await axios.post('/payment/process', { userId, paymentDetails });
      setProcessPaymentResponse(response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  const signup = async () => {
    try {
      const response = await axios.post('/signup', { username, password });
      setSignupResponse(response.data);
    } catch (error) {
      console.error('Error in signup:', error);
    }
  };

  return (
    <div>
      <h2>Book a Ride</h2>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <input type="text" placeholder="Ride Details" onChange={(e) => setRideDetails(e.target.value)} />
      <button onClick={bookRide}>Book Ride</button>
      <p>{bookRideResponse}</p>

      <h2>Submit Review</h2>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <input type="text" placeholder="Review Details" onChange={(e) => setReviewDetails(e.target.value)} />
      <button onClick={submitReview}>Submit Review</button>
      <p>{submitReviewResponse}</p>

      <h2>Update Map</h2>
      <input type="text" placeholder="Location Data" onChange={(e) => setLocationData(e.target.value)} />
      <button onClick={updateMap}>Update Map</button>
      <p>{updateMapResponse}</p>

      <h2>Process Payment</h2>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <input type="text" placeholder="Payment Details" onChange={(e) => setPaymentDetails(e.target.value)} />
      <button onClick={processPayment}>Process Payment</button>
      <p>{processPaymentResponse}</p>

      <h2>Signup</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
      <p>{signupResponse}</p>
    </div>
  );
};

export default App;
