const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Sample data - replace this with your actual data source or database
let users = [];

// POST a new user (signup)
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: 'Username, email, and password are required' });
  } else {
    // Check if the email is already registered
    if (users.some(user => user.email === email)) {
      res.status(409).json({ message: 'Email already registered' });
    } else {
      const newUser = { username, email, password };
      users.push(newUser);
      res.status(201).json(newUser);
    }
  }
});

const PORT = 30225;
app.listen(PORT, () => {
  console.log(`Signup service running on port ${PORT}`);
});
