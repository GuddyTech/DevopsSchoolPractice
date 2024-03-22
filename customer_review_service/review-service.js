const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Sample data - replace this with your actual data source or database
let reviews = [];

// GET all reviews
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

// POST a new review
app.post('/reviews', (req, res) => {
  const { userId, review } = req.body;
  if (!userId || !review) {
    res.status(400).json({ message: 'UserId and review are required' });
  } else {
    const newReview = { userId, review };
    reviews.push(newReview);
    res.status(201).json(newReview);
  }
});

// DELETE all reviews
app.delete('/reviews', (req, res) => {
  reviews = [];
  res.status(204).send();
});

const PORT = 3010; // Use a different port for the review service
app.listen(PORT, () => {
  console.log(`Review service running on port ${PORT}`);
});
