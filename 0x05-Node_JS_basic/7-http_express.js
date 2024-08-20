const express = require('express');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const databaseFilePath = process.argv[2];

  if (databaseFilePath) {
    countStudents(databaseFilePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.write(`${error.message}\n`);
        res.end();
      });
  } else {
    res.write('Cannot load the database\n');
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

module.exports = app;
