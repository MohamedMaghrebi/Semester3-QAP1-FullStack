
// Step 1: Install Bcrypt using npm install bcrypt --save
// Import the bcrypt library
const bcrypt = require('bcrypt');

// Sample password for demonstration
const plainPassword = 'mySecurePassword';

// Hash the password using Bcrypt
bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) {
    console.error('Error hashing the password:', err);
  } else {
    // Log events using console.log()
    console.log('Original Password:', plainPassword);
    console.log('Hashed Password:', hash);

    // Step 2: Compare the hashed password
    bcrypt.compare(plainPassword, hash, (compareErr, result) => {
      if (compareErr) {
        console.error('Error comparing passwords:', compareErr);
      } else {
        console.log('Password Match:', result);
      }
    });
  }
});