/*for(let i = 0; i <= 15; i++){
	if(i%2 === 0){
		console.log(`${i} is even`)
	}
	else{
		console.log(`${i} is odd`)
	}
}*/

let names= ["john", "sarah", 23, "Rudolf",34]

for(let word of names){
	if(typeof word !== 'string'){
		continue;
	}if(word[0].toUpperCase() !== word[0]){
		const newWord = word.charAt(0).toUpperCase() + word.slice(1);
		console.log(newWord)
	}

	
}