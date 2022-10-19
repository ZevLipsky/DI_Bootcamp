//Exercise 1: Simple If/Else Statement

let x = 20
let y = 12

if(x > y){
	console.log("X is bigger than Y")
}
else{
	console.log("Y is bigger than X")
}





//Exercise 2: Chihuahua

const newDog = "Chihuahua"

console.log("number of letters in newDog", newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog === "Chihuahua"){
	console.log("I love Chihuahuas, it's my favorite dog breed")
}
else{
	console.log("I don't care, I prefer cats")
}




//Exercise 3: Even Or Odd
const userNumber = prompt("enter a number")

if(userNumber % 2 === 0){
	console.log(userNumber + " is an even number")
}
else{
	console.log(userNumber + " is an odd number")
}




//Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length === 0){
	console.log("no one is online")
}
if(users.length === 1){
	console.log(users[0] + " is online")
}
if(users.length === 2){
	console.log(users[0] + " and " + users[1] + " are online")
}
if(users.length > 2){
	console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
}