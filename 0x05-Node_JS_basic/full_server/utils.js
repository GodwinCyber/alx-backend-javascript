import fs from 'fs';
// create a function named readDatabase that accepts a file path as argument:
// It should read the database asynchronously
// It should return a promise
// When the file is not accessible, it should reject the promise with the error
// When the file can be read, it should return an object of arrays of the
// firstname of students per fields

const readDatabase = async (filePath) => {
    try {
        if (!filePath) throw new Error('File path is required');

        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n');
        const studentsByField = {};

        lines.forEach((line, index) => {
            const [firstName, field] = line.split(',');
            if (index === 0) return;
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
        });

        return studentsByField;
    } catch (error) {
        throw new Error('Cannot read the database file');
    }
};

export default readDatabase;
module.exports = readDatabase;
