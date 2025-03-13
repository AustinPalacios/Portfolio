// Importing necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use environment variable or default to 3000

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route to return some data
app.get('/data', (req, res) => {
  const data = {
    message: "This is a test message from the server.",
    status: "success"
  };
  res.json(data);
});

// Route for posting data
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({
    message: `Received data: ${name}, ${age}`,
    status: "success"
  });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});