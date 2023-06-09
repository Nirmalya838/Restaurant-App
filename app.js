// Import required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./database/db');

// Create an instance of Express
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

const postRoute = require('./routes/postRoute');
const getRoute = require('./routes/getRoute');
const deleteRoute = require('./routes/deleteRoute');
const updateRoute = require('./routes/updateRoute');

app.use('/', postRoute);
app.use('/', getRoute);
app.use('/', deleteRoute);
app.use('/', updateRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
