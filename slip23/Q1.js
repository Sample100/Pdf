const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; // or '0.0.0.0' for all interfaces
const port = 3000;
const filePath = path.join(__dirname, 'assign26.html');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error: Could not read file.');
        console.error('Error reading file:', err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


