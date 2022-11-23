const largeNumber = require("./main.js");

const b = 5;

function sum(){
    return(b + largeNumber.largeNumber);
}
 
sum();

// Part II:
// Before starting the exercises, check out the lesson named Node.js Application in the Course Notes.

// In the script.js file create a server using the http module (require('http')).

// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.

// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)

// Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”
let http = require("http");
const server = http.createServer(function (req, res) {
    console.log('I am listening');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<html><body><p>My Module is: ${console.log(c)}</p><br><h1>Hi there at the frontend</h1></body></html>`);
  }).listen(3000);

  //part III
const main=require('./main.js');
const now=new Date(main.now);
console.log(now);
const http=require("http");
const server1 = http.createServer( (req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(` <p>the current date and time is:  ${now}</p>`);
 });
 server.listen(8080,()=>{
     console.log('I am listening at 8080....');
 });