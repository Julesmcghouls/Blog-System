// Import required modules
const express = require('express');
const app = express();
const PORT = 3000; // Choose any port you like

// Set up middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static files directory (for CSS, JS, etc.)
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./localStorage');

const blogController = require('./blogController');

// Mount the blog controller routes
app.use('/api', blogController);

