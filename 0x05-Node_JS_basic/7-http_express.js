// recreate the small HTTP server using Express:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// It should return plain text
// When the URL path is /, it should display Hello Holberton School! in the page body
// When the URL path is /students, it should display This is the list of our
// students followed by the same content as the file 3-read_file_async.js
// (with and without the database) - the name of the database
// must be passed as argument of the file
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];

  if (!databaseFile) {
    res.status(500).send('Error: Database file path must be provided as an argument');
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
      res.status(500).send(`Error: ${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
