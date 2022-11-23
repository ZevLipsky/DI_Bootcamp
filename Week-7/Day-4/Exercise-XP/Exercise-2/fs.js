const fs = require('fs');
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

fs.appendFile('./text', "bla bla bla", (err)=>{
    if(err){
        console.log(err);
    }
})

//Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
fs.appendFile('./text', " more bla bla bla", (err)=>{
    if(err){
        console.log(err);
    }
})

//Use the Node js File System to delete the file.
fs.unlink('./text', (err)=>{
    if(err){
        console.log(err);
    }
})