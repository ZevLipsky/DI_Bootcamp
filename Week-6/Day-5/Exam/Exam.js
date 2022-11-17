// 1.How to access the second element of the array const nums = [3, 7, 10]
console.log(nums[1])

// 2.For the code below, what does arrNums.splice(2, 0) return?
//const arrNums = [1, 2, 3, 4, 5];
Will return the array arrNums as is since it has zero for how many should be removed in position two

//3. What is the result of the following code :

// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)
The result is that favoriteNumbers has been combined with the first two arrays so it will equal [4, 5, 6, 1, 2, 3, 7, 8, 9]

//4. What does the following code print to the console?

// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
  
//   football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain);
Will print "Real Madrid" since football.clubs.spain has been redefined

//5.What does the following code print to the console?

// const myteam = "bestTeam";

// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);

This will print all the football clubs listed in the object including the new club "myTeam"
france : "Paris Saint-Germain",
spain : "Atlético Madrid",
myteam :"France national football team";

//6.Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

// const x = function(a, b){
//     return a*b;
//  }
yes its calledfunction expression and its invoked like this X(a, b)

//7.Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain

// function x() {
// 	a = 5;
// }
The answer is No. Although variable created without any keyword are global that is only if its outside of a function. Variables created inside a 
function with no keyword will only be applicable to that function.

//8.In JavaScript can we pass functions as arguments to other functions? What does this code return ?

// function sayHello() {
//     return "Hello, ";
//  }
//  function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
//  }
//  greeting(sayHello, "JavaScript!");
Yes this code will return "Hello, JavaScript!"

//9.Transform this function into an arrow function

// function sum(num1, num2){
//     return num1 + num2
// }

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))

Answer:  let sum = (num1 , num2) => num1 + num2;

//10. What does the following code print to the console? Explain the process and concept behind it

// function foo () {
//     function bar() {
//       return "Poppin' bottles";
//     }
//     return bar();
//   }
  
//   console.log(foo());
The code will print "Poppin Bottles". since it is a nested function, the function 'bar' will return "Poppin bottles",
and the the function'foo will return the child function 'bar' so when foo is console.log it will show "poppin bottles"

//11. Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick
will add click

//12.Does the addEventListener() method allow you to add many events to the same element?
yes

//13. DOM exercise

// Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on 
// the DOM with the content "New Paragraph".Use arrow functions.



const button =document.querySelector("#btn");
let counter =1;

const changeColor = (event) => {
    console.log(event.target);
    event.target.style.color = "red";

}

const addParagraph = () =>{
    const section = document.querySelector("#container");
    const para = document.createElement("p");
    const node = document.createTextNode(`New Paragraph ${counter}`);
    para.addEventListener("mouseover", changeColor)
    para.appendChild(node);
    section.appendChild(para)
    counter += 1
}


button.addEventListener("click", addParagraph);


//14.Do this exercise twice: first with a for loop, then with a for of loop. 
//Console.log the sum of this array
function sum1() {
    const marks1 = [67, 60, 89, 90, 67, 42];
    let total = 0;
    for (let i = 0; i < marks1.length; i++) {
        total += marks1[i];
    }
    console.log(total);
}

sum1();

function sum2() {
    const marks2 = [67, 60, 89, 90, 67, 42];
    let total = 0;
    for (const element of marks2) {
        total += element;
    }
    console.log(total);
}

sum2();

// 15. What is the value of passed in the following code?
there is no value

//16.What does the following code log?
50 and 88

//17.Use a javascript array method to square the value of every element in the array
const squaredArr = () => {
    const input = [ 1, 2, 3, 4, 5 ];
    const numsSquared = input.map(nums => nums * nums);
    console.log(numsSquared);
}

squaredArr();


// 20. How objects are passed to a function in JavaScript? By Value or By Reference ?
Objects are passed to a function by reference.

// 21. How would you change the code above, so that when you modify the key 
// color from the parameter myshirt,
i am not sure of the answer

// 22. Use object destructuring to retrieve the value of the keys france and spain

const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  


const {clubs: {france}} = football;
console.log(france);
const {clubs: {spain}} = football;
console.log(spain);

// //// 23. Use object destructuring in the function to retrieve the value of the keys france and spain
function retrieveSports ({type, clubs:{france}, clubs:{spain}}) {
    const sentence = `My favorite football teams are ${france} and ${spain}`;
    console.log(sentence);
 }
 // 24. What will be printed in the console?
 "Chocolate cake is for $10"
 
 // 25.What will be the output and why ? What will be the state of the promise ?
 The output will be SUCCESS! the promis will be resolved

 // 26. What will be displayed by the following code, after 2 seconds?
"OK"