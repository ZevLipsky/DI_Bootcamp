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