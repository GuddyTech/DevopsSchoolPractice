import React, { useState } from 'react';
import axios from 'axios';

import './ReviewService.css';

function ReviewService() {
  const [userId, setUserId] = useState('');
  const [review, setReview] = useState('');

  const handlePostReview = async () => {
    try {
      // Make a POST request to the server
      await axios.post('http://localhost:3010/reviews', {
        userId,
        review,
      });
      // If successful, alert the user
      alert('Review posted successfully');
    } catch (error) {
      // If an error occurs, log it to the console and alert the user
      console.error('Error posting review:', error);
      alert('Error posting review. Please check the console for more details.');
    }
  };

  return (
    <div className='review-container'>
      <h2>Review Service</h2>
      <h3 className='review-title'>Post a Review</h3>
      <input
        type='text'
        placeholder='User ID'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <br></br> <br></br>

      <textarea
        placeholder='Enter your review'
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      <br></br> <br></br>

      <button onClick={handlePostReview}>Post Review</button>
    </div>
  );
}

export default ReviewService;
