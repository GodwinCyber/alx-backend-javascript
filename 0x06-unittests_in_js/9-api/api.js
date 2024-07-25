// By using express, create an instance of express called app
// Listen to port 7865 and log API available on localhost port 7865 to
// the browser console when the express server is started
// For the route GET /, return the message Welcome to the payment system

const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Cannot GET ' + req.originalUrl);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
