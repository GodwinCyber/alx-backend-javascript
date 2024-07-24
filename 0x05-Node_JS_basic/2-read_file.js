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
