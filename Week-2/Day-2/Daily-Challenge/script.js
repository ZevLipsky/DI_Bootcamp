const sentence = "This dinner is bad !"
const wordNot = sentence.search("not")
const wordBad = sentence.search("bad")

if(wordNot===-1){
	console.log(sentence)
}
else if (wordNot < wordBad){
	console.log('wordBad', wordBad)
	console.log('wordNot', wordNot)

	const firstPart = sentence.slice(0, wordNot)
	const secondPart = sentence.slice(word  + 3)
	console.log(firstPart + "good" + secondPart)
}
else{
	console.log(sentence)
}