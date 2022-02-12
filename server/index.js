const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./mongo.connect')();

const app = express();
const port = process.env.EXPRESS_PORT | 2000;

// Apply middleware
app.use(cors());
app.use(express.json());

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});