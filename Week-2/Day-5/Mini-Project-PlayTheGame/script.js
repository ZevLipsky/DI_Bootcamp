/*In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

If the answer is false, alert “No problem, Goodbye”.

If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

 
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
Else (ie. he entered a number between 0 and 10), create a variable named 
computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). 
Make sure that the number is rounded.*/
let userNumber;
let computerNumber;

function playTheGame(){
	let answer = confirm("Would you like to play a game?")
	if(answer == false){
		alert("No problem, Goodbye.");
	}
	if(answer == true){
		 userNumber = Number(prompt("Please enter a number between 0 and 10."))
		

		if (isNaN(userNumber)) {
			alert("Sorry not a number, Goodbye")
			
		}
		
		if(userNumber<0 || userNumber>10){
			alert("Sorry it's not a good number, Goodbye.")
			
		}
		else{
			 computerNumber = Math.floor(Math.random() * 11);
			console.log(computerNumber)
		}
	}
} 



function compareNumbers(userNumber, computerNumber){
	for (let i = 0; i>3; i++){
	
	if(userNumber === computerNumber){
		alert("WINNER")
		return
	}
	if(userNumber > computerNumber){
		alert("Your number is bigger than the computer's, guess again!")
		let userNumber = Number(prompt("Please enter a number between 0 and 10."))
		
	}
	if(userNumber < computerNumber){
		alert("Your number is smaller than the computer's, guess again!")
		let userNumber = Number(prompt("Please enter a number between 0 and 10."))
		
	}
}
}

playTheGame()
compareNumbers()