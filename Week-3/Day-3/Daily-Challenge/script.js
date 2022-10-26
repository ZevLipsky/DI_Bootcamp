
const userInput = document.querySelector("input");
const allowedChars = /[a-z]/;
userInput.addEventListener("keypress", event => {
  if (!allowedChars.test(event.key)) {
    event.preventDefault();
  }
});