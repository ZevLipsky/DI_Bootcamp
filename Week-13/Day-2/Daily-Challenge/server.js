const {date} = require('./main.js')
const http = require('http');
const port = 8080

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`The date and time currently ${date}`);

})

server.listen(port);
console.log('running on port 8080');