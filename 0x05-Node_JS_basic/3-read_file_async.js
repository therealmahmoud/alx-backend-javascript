const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const header = lines[0].split(',');
      const studentData = lines.slice(1);

      const fieldCounts = {};
      const fieldLists = {};

      studentData.forEach((line) => {
        const student = line.split(',');

        if (student.length === header.length) {
          const field = student[header.length - 1];
          const firstName = student[0];

          if (!fieldCounts[field]) {
            fieldCounts[field] = 0;
            fieldLists[field] = [];
          }

          fieldCounts[field] += 1;
          fieldLists[field].push(firstName);
        }
      });
      console.log(`Number of students: ${studentData.length}`);

      // eslint-disable-next-line guard-for-in
      for (const field in fieldCounts) {
        console.log(
          `Number of students in ${field}: ${
            fieldCounts[field]
          }. List: ${fieldLists[field].join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
