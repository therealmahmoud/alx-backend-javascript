const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the list of our students\n');

    const dbFilePath = process.argv[2];

    if (dbFilePath) {
      countStudents(dbFilePath)
        .then(() => {
          res.write();
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
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
