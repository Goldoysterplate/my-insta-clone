// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001; // <- change port here

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('<h1>Hello World from Express!</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
