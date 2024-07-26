const fs = require('fs');
// Create a function named countStudents. It should
// accept a path in argument (same as in 2-read_file.js)
// The script should attempt to read the database file asynchronously
// The function should return a Promise
// If the database is not available, it should throw an error
// with the text Cannot load the database
// If the database is available, it should log the following
// message to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the
// list with the following format: Number of students in FIELD: 6.
// List: LIST_OF_FIRSTNAMES CSV file can contain empty
// lines (at the end) - and they are not a valid student!

const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data
        .split('\n')
        .filter((line) => line.trim() !== '' && !line.startsWith('firstname'))
        .map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return {
            firstname: firstname.trim(), lastname: lastname.trim(), age: parseInt(age, 10), field: field.trim(),
          };
        });

      const csStudents = students.filter((student) => student.field === 'CS').map((student) => student.firstname);
      const sweStudents = students.filter((student) => student.field === 'SWE').map((student) => student.firstname);

      resolve({
        students,
        csStudents,
        sweStudents,
      });
    });
  });
}

module.exports = countStudents;
