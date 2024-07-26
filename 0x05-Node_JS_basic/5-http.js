const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.writeHead(500);
      res.end('Error: Database file path must be provided as an argument');
      return;
    }

    const databasePath = path.join(__dirname, databaseFile);

    countStudents(databasePath)
      .then((output) => {
        res.writeHead(200);
        res.write('This is the list of our students\n');
        res.end(output);
      })
      .catch((err) => {
        res.writeHead(500);
        res.end(`Error: ${err.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
