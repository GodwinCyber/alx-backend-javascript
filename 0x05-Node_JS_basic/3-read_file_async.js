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

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) {
      resolve('Number of students: 0');
      return;
    }

    const studentsByField = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      const fields = line.split(',');

      if (fields.length === 4) {
        const [firstName, , , field] = fields;
        totalStudents += 1;

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    }
    let output = `Number of students: ${totalStudents}\n`;

    for (const [field, students] of Object.entries(studentsByField)) {
        const fieldOutput = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        output += fieldOutput;
    }
    resolve(output);
  });
});

module.exports = countStudents;
