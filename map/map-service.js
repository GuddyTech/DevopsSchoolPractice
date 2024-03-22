const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// GET directions
app.get('/directions', (req, res) => {
  const { origin, destination } = req.query;
  if (!origin || !destination) {
    res.status(400).json({ message: 'Origin and destination are required' });
  } else {
    // Here you would typically integrate with a mapping service (like Google Maps) to get directions
    // For demonstration purposes, we'll simply respond with a success message
    const directions = `Directions from ${origin} to ${destination}`;
    res.status(200).json({ directions });
  }
});

const PORT = 30223;
app.listen(PORT, () => {
  console.log(`Map service running on port ${PORT}`);
});
