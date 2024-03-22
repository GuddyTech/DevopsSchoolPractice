// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import MapService from './components/MapService';
import PaymentService from './components/PaymentService';
import SignupService from './components/SignupService';
import ReviewService from './components/ReviewService';
import BookRideService from './components/BookRideService';

// const MapService = () => <div><h2>Map Microservice</h2></div>;
// const PaymentService = () => <div><h2>Payment Microservice</h2></div>;
// const SignupService = () => <div><h2>Signup Microservice</h2></div>;
// const ReviewService = () => <div><h2>Customer Review Microservice</h2></div>;
// const BookRideService = () => <div><h2>Book Ride Microservice</h2></div>;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <Router>
      <div>
      <div>
      <p>Message from the backend: {message}</p>
    </div>
    <nav>
      <ul>
        <li><Link to="/map">Map Service</Link></li>
        <li><Link to="/payment">Payment Service</Link></li>
        <li><Link to="/signup">Signup Service</Link></li>
        <li><Link to="/reviews">Customer Review Service</Link></li>
        <li><Link to="/bookride">Book Ride Service</Link></li>
      </ul>
    </nav>
        <Routes>
          <Route path="/map" element={<MapService />} />
          <Route path="/payment" element={<PaymentService />} />
          <Route path="/signup" element={<SignupService />} />
          <Route path="/reviews" element={<ReviewService />} />
          <Route path="/bookride" element={<BookRideService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

