const fs = require('fs');



// fs.mkdir('public', (err)=>{
//     if(err) return console.log(err);
//     console.log('Folder created');
// })

// fs.copyFile('users', 'users2', (err)=>{
//     if (err) return console.log(err); 
//     console.log('file copied');
// })




// const data = 'this is my hello world file'
// const users = [
//     {name: 'john', email:'jjj@gmail.com'},
//     {name: 'zev', email: 'zzz@gmail.com'},
//     {name: 'john', email:'jjj@gmail.com'},


// ]

// fs.writeFile('users', JSON.stringify(users), 'utf-8', (err)=>{
//     if (err) console.log(err);
// })

// console.log('Before reading file');

// const data = fs.readFileSync('users', 'utf-8' );
// console.log(JSON.parse(data));
// const info = fs.readFile('info.txt', 'utf-8', (err,data)=>{
//     if(err)console.log(err);
//     else console.log(data);
// })
// console.log(info);

// console.log('After reading file');