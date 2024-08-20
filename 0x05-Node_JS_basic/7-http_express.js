const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFilePath = process.argv[2];

  res.write('This is the list of our students\n');

  if (databaseFilePath) {
    countStudents(databaseFilePath)
      .then(() => res.end())
      .catch((error) => {
        res.write(`${error.message}\n`);
        res.end();
      });
  } else {
    res.write('Cannot load the database\n');
    res.end();
  }
});

app.listen(1245);

module.exports = app;
