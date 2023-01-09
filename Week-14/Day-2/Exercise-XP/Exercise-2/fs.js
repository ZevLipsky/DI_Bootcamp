// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a 
// new text file and write to it.
const fs = require('fs');

const text = "This is the text";

fs.writeFile('newFile', text, 'utf-8', (err)=>{
    if (err) console.log(err);
});

//Use the Node js File System to append some other 
// text to the text file. (Example:”Buy orange juice”)
fs.appendFile('newFile', "Buy orange juice", 'utf-8', (err)=>{
    if(err)console.log(err);
} )

// Use the Node js File System to delete the file.
fs.unlink('newFile', (err)=>{
    if (err) {
        console.log(err);
    }
})