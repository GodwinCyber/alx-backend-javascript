// Create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// It should return plain text
// When the URL path is /, it should display Hello Holberton School!
// in the page body When the URL path is /students, it should
// display This is the list of our students followed by the same
// content as the file 3-read_file_async.js (with and without the database) -
// the name of the database must be passed as argument of the file
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, resp) => {
  resp.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    resp.writeHead(200);
    resp.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      resp.writeHead(500);
      resp.end('Error: Database file path must be provided as an argument');
      return;
    }

    const databasePath = path.join(__dirname, process.argv[2]);

    countStudents(databasePath)
      .then((output) => {
        resp.writeHead(200);
        resp.write('This is the list of our students\n');
        resp.end(output);
      })
      .catch((err) => {
        resp.writeHead(500);
        resp.end(`Error: ${err.message}`);
      });
  } else {
    resp.writeHead(404);
    resp.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
