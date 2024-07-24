// Using the database database.csv
// (provided in project description),
// create a function countStudents in the
// file 2-read_file.js Create a function named
// countStudents. It should accept a path in argument
// The script should attempt to read the database file
// synchronously If the database is not available, it
// should throw an error with the text Cannot load the database
// If the database is available, it should log the following
// message to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the
// list with the following format: Number of students in
// FIELD: 6. List: LIST_OF_FIRSTNAMES CSV file can contain
// empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      console.log('Number of students: 0');
      return;
    }

    const studentsByField = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) continue;

      const [firstName, lastName, age, field] = line.split(',');
      if (!firstName || !lastName || !age || !field) continue;

      totalStudents += 1;

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new error('Cannot load the database');
  }
};
module.exports = countStudents;
