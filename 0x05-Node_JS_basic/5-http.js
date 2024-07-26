const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.writeHead(500);
      res.end('Error: Database file path must be provided as an argument');
      return;
    }

    countStudents(databaseFile)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end();
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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
