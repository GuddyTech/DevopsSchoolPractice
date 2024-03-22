const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// POST a new payment
app.post('/payment', (req, res) => {
  const { cardNumber, expiryDate, cvv, amount } = req.body;
  if (!cardNumber || !expiryDate || !cvv || !amount) {
    res.status(400).json({ message: 'Card details and amount are required' });
  } else {
    // Here you would typically integrate with a payment gateway to process the payment
    // For demonstration purposes, we'll simply respond with a success message
    res.status(200).json({ message: 'Payment processed successfully' });
  }
});

const PORT = 30221;
app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
