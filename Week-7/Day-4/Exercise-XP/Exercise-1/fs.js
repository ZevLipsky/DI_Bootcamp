const fs = require('fs');

fs.readFile('./text', 'utf-8',(err,data) =>{
    if(err){
        console.log("error=>", err);
    }
    else{
        console.log(data);
    }
})