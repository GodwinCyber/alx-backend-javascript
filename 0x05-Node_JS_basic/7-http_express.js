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
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  if (!process.argv[2]) {
    res.status(500).send('Error: Database file path must be provided as argumnt');
    return;
  }
  const databasePath = path.join(__dirname, process.argv[2]);
  countStudents(databasePath)
    .then((output) => {
      const responseMessage = `This is the list of the students\n${output}`;
      res.status(200).set('Content-Type', 'text/plain');
      res.send(responseMessage);
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'text/plain');
      res.statu(500).set('Content-Type', 'text/plain');
      res.send(`Error: ${err.message}`);
    });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;
