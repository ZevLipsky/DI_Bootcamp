// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// let string = JSON.parse(jsonString);
// const optiomd = string.quiz.sport.q1.options

// optiomd.forEach(element => console.log(element));
// Exercise 1: exceptions
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google - a type error will be shown
// Is the console.log("after") will be shown on the console ? yes the code will continue after it catches the error

// Exercise 2
// Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email." (edited) 

function checkEmail(user){
    try{
        if(user.includes("@")){
            console.log("You are signed in");
            
        }
        else{
            throw new Error("missing @")
        }
    }catch(error){
        console.log(error.message)
    }
}
checkEmail("john@gmail.com")
checkEmail("johngmail.com")