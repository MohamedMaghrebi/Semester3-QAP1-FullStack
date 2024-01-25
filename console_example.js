// This Node.js file demonstrates the use of the Console object
// to log messages to the terminal.

// Import the 'console' module (Note: 'console' is a global object in Node.js)
const consoleModule = require('console');

// Create a new Console object
const customConsole = new consoleModule.Console(process.stdout, process.stderr);

// Log messages using the Console object
customConsole.log('This is a log message.');
customConsole.error('This is an error message.');
customConsole.warn('This is a warning message.');