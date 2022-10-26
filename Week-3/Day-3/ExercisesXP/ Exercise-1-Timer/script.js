//Part I
//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will alert “Hello World”.


function sayHi(phrase, who) {
  alert( phrase + " " + who );
}

setTimeout(sayHi, 2000, "Hello", "World");

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function newParagraph() {
	const paragraph = document.createElement("p");
	const node = document.createTextNode("Hello World")
	const element = document.getElementById("container")
	paragraph.appendChild(node)
	element.appendChild(paragraph)
}

setTimeout(newParagraph, 2000)

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let timer = setInterval(newParagraph, 2000);
let clear = document.getElementById("clear");
clear.addEventListener("click", resetInterval);

function resetInterval() {
	clearInterval(timer);
	}
 
setTimeout(resetInterval, 10000)