const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Sample data - replace this with your actual data source or database
let bookings = [];

// GET all bookings
app.get('/bookings', (req, res) => {
  res.json(bookings);
});

// POST a new booking
app.post('/bookings', (req, res) => {
  const { userId, rideDetails } = req.body;
  if (!userId || !rideDetails) {
    res.status(400).json({ message: 'UserId and rideDetails are required' });
  } else {
    const newBooking = { userId, rideDetails };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
  }
});

// DELETE all bookings
app.delete('/bookings', (req, res) => {
  bookings = [];
  res.status(204).send();
});

const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
