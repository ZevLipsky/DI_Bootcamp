// Use the exported module in a script.js file.
const {largeNumber} = require('./main.js');
const http = require('http');

const port = 3000;
const host = "localhost";



// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b
const b = 5;
const result = largeNumber + b
console.log(result);

const server =  http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Hi there at the front end</h1></body></html>');
    res.end(`My module is ${result}`);

});





function sayHello(){
    console.log("Server is running on port", port);
}


server.listen(port, host, sayHello); 
