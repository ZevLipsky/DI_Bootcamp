// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to 
// read the text file and console.log the output in the terminal
const fs = require('fs');

const data = fs.readFileSync('text.txt', 'utf-8');
console.log(data);
