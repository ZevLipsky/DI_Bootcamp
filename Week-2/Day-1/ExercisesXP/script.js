/* Exercise 1: Your Favorite Food */

let food = "Hamburger"
let meal = "Dinner"


console.log("I eat " + food + "at every " +meal);

/* Exercise 2 : Series*/
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = 3;
const myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory.";
myWatchedSeries.splice(2, 2, "friends");
myWatchedSeries.push("stranger things");
myWatchedSeries.unshift("peaky blinders");
myWatchedSeries.splice(1,1);
console.log("I watched " +myWatchedSeriesLength+ " : " +myWatchedSeriesSentence);
console.log(myWatchedSeries);

 /*Exercise 3 : The Temperature Converter*/
let celsius = 37;
let fahrenheit =(+celsius/5*9+32);
console.log(+celsius+ " C is " +fahrenheit+ " F ");

 /*Exercise 4 : Guess The Answers #1*/

 let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 since 34+21=55
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23 since the 'a' variable has changed so will the original sum of a+b
    // Actual:23

    console.log(3 + 4 + '5');// third expression
    //Prediction: 12 since they are all numbers
    //Actual:75

    /*Exercise 5 : Guess The Answers #2*/

   console.log(typeof(15));
// Prediction: number since 15 is a number
// Actual:number

console.log(typeof(5.5));
// Prediction: number since 5.5 is a number
// Actual:number

console.log(typeof(NaN));
// Prediction:number since NaN is for numbers
// Actual:number

console.log(typeof("hello"))
// Prediction:word
// Actual:string

console.log(typeof(true));
// Prediction:boolean is either true or false
// Actual:boolean

console.log(typeof(1 != 2));
// Prediction:boolean since != is an expression of false
// Actual:boolean

console.log("hamburger" + "s");
// Prediction: hamburgers two strings put together
// Actual:hamburgers

console.log("hamburgers" - "s");
// Prediction:hamburger
// Actual:NaN

console.log("1" + "3");
// Prediction:4 since 1 and 3 are numbers
// Actual:13

console.log("1" - "3");
// Prediction:-2 since 1 and 3 are numbers
// Actual:-2

console.log("johnny" + 5);
// Prediction:NaN johnny is a word and 5 is a number
// Actual:johnny5

console.log("johnny" - 5);
// Prediction:NaN johnny is a word and 5 is a number
// Actual:NaN

console.log(99 * "hello");
// Prediction:NaN 
// Actual:NaN

console.log(1 != 1);
// Prediction:False 1 is equal to 1
// Actual:False

console.log(1 == "1");
// Prediction:true 1 equals 1
// Actual:true

console.log(1 === "1");
// Prediction:false
// Actual:false

/*Exercise 6 : Guess The Answers #3*/

console.log(5 + "34");
// Prediction:534 since the number 5 plus the string "34"
// Actual:534

console.log(5 - "4");
// Prediction:NaN number minus a string does not work
// Actual:1

console.log(10 % 5);
// Prediction:0 since 10 modulo 5 is 0
// Actual:0

console.log(5 % 10);
// Prediction:5 since 5 modulo 10 is 5
// Actual:5

console.log("Java" + "Script");
// Prediction:JavaScript two strings attached
// Actual:JavaScript

console.log(" " + " ");
// Prediction:empty space since the quotes contain a string
// Actual:empty space

console.log(" " + 0);
// Prediction:empty space string plus a number
// Actual:empty space and then a 0

console.log(true + true);
// Prediction:true since it is a true statment
// Actual:2

console.log(true + false);
// Prediction:false
// Actual:1

console.log(false + true);
// Prediction:false
// Actual:1

console.log(false - true);
// Prediction:false
// Actual:-1

console.log(!true);
// Prediction:false 
// Actual:false

console.log(3 - 4);
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill");
// Prediction:NaN since they are not number
// Actual:NaN





