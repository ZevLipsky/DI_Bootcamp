
// const userInput = document.querySelector("input");
// const allowedChars = /[a-z]/;
// userInput.addEventListener("keypress", event => {
//   if (!allowedChars.test(event.key)) {
//     event.preventDefault();
//   }
// });


const userInput = document.querySelector("input");
const allowedChars = /[A-Za-z]/;
userInput.addEventListener("keydown", checkKey) 
  
 function checkKey(event) {
    console.log(event)
    console.log(event.key)
    if (!allowedChars.test(event.key)) {
    event.preventDefault();
  }
}