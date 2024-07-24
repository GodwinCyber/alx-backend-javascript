// In a file named 4-http.js, create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, hostname);

module.exports = app;
