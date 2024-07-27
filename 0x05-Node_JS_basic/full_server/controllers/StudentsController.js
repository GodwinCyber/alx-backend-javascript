// create a class named StudentsController. Add two static methods:
// The first one is getAllStudents:
// The method accepts request and response as argument
// It should return a status 200
// It calls the function readDatabase from the utils file, and display in the page:
// First line: This is the list of our students
// And for each field (order by alphabetic order case insensitive), a line that
// displays the number of students in the field, and the list of first
// names (ordered by appearance in the database file) with the following
// format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// If the database is not available, it should return a
// status 500 and the error message Cannot load the database

import { readDatabase } from '../utils';

class StudentsController {
    static getAllStudents(request, response) {
      const dataPath = process.argv.length > 2 ? process.argv[2] : '';
  
      readDatabase(dataPath)
        .then((studentGroups) => {
          const responseParts = ['This is the list of our students'];
          // A comparison function for ordering a list of strings in ascending
          // order by alphabetic order and case insensitive
          const cmpFxn = (a, b) => {
            if (a[0].toLowerCase() < b[0].toLowerCase()) {
              return -1;
            }
            if (a[0].toLowerCase() > b[0].toLowerCase()) {
              return 1;
            }
            return 0;
          };
  
          for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
            responseParts.push([
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' '));
          }
          response.status(200).send(responseParts.join('\n'));
        })
        .catch((err) => {
          response
            .status(500)
            .send(err instanceof Error ? err.message : err.toString());
        });
    }
  
    static getAllStudentsByMajor(request, response) {
      const dataPath = process.argv.length > 2 ? process.argv[2] : '';
      const { major } = request.params;
  
      if (!VALID_MAJORS.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }
      readDatabase(dataPath)
        .then((studentGroups) => {
          let responseText = '';
  
          if (Object.keys(studentGroups).includes(major)) {
            const group = studentGroups[major];
            responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
          }
          response.status(200).send(responseText);
        })
        .catch((err) => {
          response
            .status(500)
            .send(err instanceof Error ? err.message : err.toString());
        });
    }
  }

export default StudentsController;
module.exports = StudentsController;
