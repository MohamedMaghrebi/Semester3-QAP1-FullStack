// This Node.js file demonstrates the use of the HTTP module
// to create a simple HTTP server.

// Import the 'http' module (Note: 'http' is a global object in Node.js)
const httpModule = require('http');

// Create an HTTP server
const server = httpModule.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Define the server port
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});