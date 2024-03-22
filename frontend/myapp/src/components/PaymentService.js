import React, { useState } from 'react';
import axios from 'axios';

import './PaymentService.css';
import successImage from './success.gif'; // Import your success image

function PaymentService() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    try {
      // Make a POST request to the server
      await axios.post('http://localhost:30221/payment', {
        cardNumber,
        expiryDate,
        cvv,
        amount,
      });
      // If successful, set paymentSuccess to true
      setPaymentSuccess(true);
      console.log('You successfully completed your payment!');
    } catch (error) {
      // If an error occurs, log it to the console and alert the user
      console.error('Error processing payment:', error);
      alert('Error processing payment. Please check the console for more details.');
    }
  };

  return (
    <div className='payment-container'>
      <h2>Payment Service</h2>
      <h3 className='payment-title'>Make a Payment</h3>
      <input
        type='text'
        placeholder='Card Number'
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      /> 
      <br></br> <br></br>
      <input
        type='text'
        placeholder='Expiry Date (MM/YY)'
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      /> 
      <br></br> <br></br>
      <input
        type='text'
        placeholder='CVV'
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <br></br> <br></br>
      <input
        type='text'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br> <br></br>
      <button onClick={handlePayment}>Make Payment</button>
      <br></br> <br></br>

      <div className='successful'>
      {paymentSuccess && <img src={successImage} alt='Success' className='success-image' />}
      </div>
      
    </div>
  );
}

export default PaymentService;
