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
    static async getAllStudents(req, res) {
        try {
            const studentsByField = await readDatabase('./database.csv');
            let response = 'This is the list of our students\n';

            Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(field => {
                const names = studentsByField[field].join(', ');
                response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${names}\n`;
            });

            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const studentsByField = await readDatabase('./database.csv');
            if (!studentsByField[major]) {
                return res.status(200).send('List: ');
            }
            const names = studentsByField[major].join(', ');
            res.status(200).send(`List: ${names}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
module.exports = StudentsController;
