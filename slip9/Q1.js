// stringConcatServer.js

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const query = querystring.parse(parsedUrl.query);

  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    // Serve the HTML form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>String Concatenation</title>
        </head>
        <body>
          <h2>Concatenate Two Strings</h2>
          <form method="GET" action="/concat">
            <input type="text" name="str1" placeholder="First string" required />
            <input type="text" name="str2" placeholder="Second string" required />
            <button type="submit">Concatenate</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/concat') {
    const { str1, str2 } = query;

    const concatenated = `${str1}${str2}`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Concatenated Result</title>
        </head>
        <body>
          <h2>Result</h2>
          <p><strong>${str1}</strong> + <strong>${str2}</strong> = <strong>${concatenated}</strong></p>
          <a href="/">Try Again</a>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
