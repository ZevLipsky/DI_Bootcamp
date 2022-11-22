const http = require('http');

const server = http.createServer((req, res)=>{
    //send a response to the client 
    console.log('url=> ', req.url);
    
    if(req.url === '/'){
        res.end('<h1> Home Page</h1>')
    }
    else if(req.url === '/about'){
        res.end('<h1> About Page</h1>')
    }
    else{
        res.end('<h1>404 Not Found</h1>')
    }
    console.log("Getting request");
    res.end('hello from my first server... ')
})

server.listen(5000, () =>{
    console.log('Server is running to port 5000');
})