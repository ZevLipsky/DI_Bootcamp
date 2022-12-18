let sentence = ["my","favorite","color","is","blue"];
let text = sentence.join(" ")

console.log(text);

//exercise-2
// let str1 = "mix";
// let str2 = "top";
// let new_str1 = str2.slice(0,2).concat("", str1.slice(2))
// let new_str2 = str1.slice(0,2).concat("", str2.slice(2))
// console.log(new_str1);
// console.log(new_str2);
// let str1 = "mix";
// let str2 = "top";
// let new_str1 = str2.slice(0,2).concat("" )
// let new_str2 = str1.slice(0,2)
// console.log(new_str1);
// console.log(new_str2);

//exercise-3
// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 =  prompt("Please enter a number.")*1;
let num2 = parseFloat( prompt("Please enter a second number"));
let operater = prompt("Please enter an operator: + , / , * or -");
let result;

calculate()
alert(result)
// function numberCheck(){
//     if(isNaN(num1)){
//         alert("You did not enter in a number.")
//         let num1 = parseFloat(prompt("Please enter in a first number."))
    
//     }else if(isNaN(num2)){
//         alert("You did not enter in a number.")
//         let num2 = parseFloat(prompt("Please enter in a second number."))
        
//     }
// }

function calculate(){
    if(operater = '+'){
        result = num1+num2
    }
    else if(operater = '-'){
        result = num1-num2;
    }
    else if(operater = '/'){
        result = num1/num2;
    }
    else{
        result = num1*num2;
    }
}