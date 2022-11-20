const users = require('./users.js')
users.getUsers()
.then(data=>{
    console.log(data);
})