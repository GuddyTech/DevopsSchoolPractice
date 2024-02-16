// server.js
const express = require('express');
const app = express();
const port = 3001; // Make sure this port is different from your React app's port

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
