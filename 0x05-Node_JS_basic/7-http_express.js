const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const fields = lines.shift().split(',');

      const students = {};
      let totalStudents = 0;

      lines.forEach((line) => {
        const record = line.split(',');
        if (record.length === fields.length) {
          const field = record[record.length - 1];
          const student = record[0];
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(student);
          totalStudents += 1;
        }
      });

      let result = `Number of students: ${totalStudents}\n`;
      Object.keys(students).forEach((field) => {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      resolve(result.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('Cannot load the database');
    return;
  }

  try {
    const studentList = await countStudents(database);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
