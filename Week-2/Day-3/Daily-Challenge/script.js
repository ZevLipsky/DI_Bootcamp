/*
let dot = " "

for(let i = 0; i < 6; i++){
	dot = dot + " * "
	console.log(dot)
}
*/
let dot = ""

for(let i = 0; i < 6; i++){
	for(let j = 0; j <= i; j++){
		dot +="*"

	}
	dot += "\n"
}
console.log(dot)