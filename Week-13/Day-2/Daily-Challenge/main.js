// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
const largeNumber = 356;

// getDate = () => {

// }
const date = new Date();
console.log(date);

module.exports = {
    largeNumber,
    date
}
// Use the exported module in a script.js file.

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b
