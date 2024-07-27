import fs from 'fs';
// create a function named readDatabase that accepts a file path as argument:
// It should read the database asynchronously
// It should return a promise
// When the file is not accessible, it should reject the promise with the error
// When the file can be read, it should return an object of arrays of the
// firstname of students per fields

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }
    if (dataPath) {
      fs.readFile(dataPath, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const fileLines = data
            .toString('utf-8')
            .trim()
            .split('\n');
          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames
            .slice(0, dbFieldNames.length - 1);
  
          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord
              .slice(0, studentRecord.length - 1);
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames
              .map((propName, idx) => [propName, studentPropValues[idx]]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }
          resolve(studentGroups);
        }
      });
    }
  });  

export default readDatabase;
module.exports = readDatabase;
