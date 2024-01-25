// This Node.js file demonstrates the use of the URL object
// to parse and manipulate URLs.

// Import the 'url' module (Note: 'url' is a global object in Node.js)
const urlModule = require('url');

// Define a sample URL
const sampleUrl = 'https://www.example.com/path?query=123#fragment';

// Parse the sample URL
const parsedUrl = urlModule.parse(sampleUrl, true);

// Log parts of the URL using the parsed object
console.log('Parsed URL:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.query);
console.log('Fragment:', parsedUrl.hash);