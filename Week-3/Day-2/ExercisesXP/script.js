const h1 = document.querySelector("h1")
console.log(h1)

  const list = document.querySelector("article");
  
    list.removeChild(list.children[6]);


const h2 = document.querySelector("h2")
h2.addEventListener("click", changeBackground)

function changeBackground(event) {
    	console.log(event)
      document.body.style.backgroundColor = "red";

    }    
  
  const h3 = document.querySelector("h3");
  h3.addEventListener("click", hide)



function hide(event) {

   h3.style.display= "none";

}

const button = document.getElementById("clickme")
button.addEventListener("click", boldText)

function boldText(event){
	const paragraphs = document.querySelectorAll("p")
	for(const paragraph of paragraphs){
		paragraph.classList.add("bold")
	}
}


//🌟 Exercise 2 : Work With Forms

let forum = document.forms
console.log(forum)

let inputId1  = document.getElementById('fname')
let inputId2  = document.getElementById('lname')
let inputId3  = document.getElementById('submit')

console.log(inputId1)
console.log(inputId2)
console.log(inputId3)

let inputFname = document.getElementsByTagName("fname")
let inputLname = document.getElementsByTagName("lname")

console.log(inputFname)
console.log(inputLname)


//🌟 Exercise 3 : Transform The Sentence

let allBoldItems;

function getBoldItems(){
  allBoldItems = document.getElementsByTagName("strong");
}

function highlight(){
  getBoldItems();
  for(const boldItem of allBoldItems){
    boldItem.style.color = "blue";
  }
}
highlight();

function returnNormal(){
  getBoldItems()
  for(const item of allBoldItems){
    item.style.color = "black";
  }
}
returnNormal()

const paragraph = document.querySelector("p")
paragraph.addEventListener("mouseover", highlight)
paragraph.addEventListener("mouseout", returnNormal)
