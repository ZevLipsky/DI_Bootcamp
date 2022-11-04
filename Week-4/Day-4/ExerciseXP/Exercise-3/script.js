//ex3
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const arrUsers=[[,],[,],[,]];
arrUsers[0]=["user1",users.user1];
arrUsers[1]=["user2",users.user2];
arrUsers[2]=["user3",users.user3];

console.log(arrUsers);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
arrUsers.forEach((element)=>{
    element[1]*=2;
})

