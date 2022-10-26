//Daily Challenge: Tell The Story

//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
const btnSubmit=document.forms[0].elements.libButton;
btnSubmit.addEventListener('click',lib);
let values=[];

function lib(event){
    event.preventDefault();
    inputs=document.querySelectorAll('input');
    
    for (let i=0; i<inputs.length;i++) {
        values[i]=inputs[i].value;
        if (values[i]==='') { //Make sure the values are not empty
            alert(`fill all the fields please!`)
            return;
        }
    }
    writeStories();
}

function writeStories(){
    
    const story1=`I like to see ${values[0]}s, because they are very ${values[1]}. and ${values[2]} told me he likes them too! so all the day we ${values[3]} around them, especially in ${values[4]}. `;
    const story2=`yesterday I bought some ${values[0]}s and they were not ${values[1]} at all! so I gave it to ${values[2]} , and we ${values[3]} together just next to ${values[4]}`;
    const story3=`today I like some ${values[0]}s and they are ${values[1]}! so I will send it to ${values[2]} , and we will ${values[3]} together before going to ${values[4]}`;
    const stories=[story1,story2,story3]
    let random=Math.floor(Math.random() *3);
    appendStory(stories[random]);
}

function appendStory(story){
    document.querySelector('span').innerText=story;
}

//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
document.querySelector("button#shuffle").addEventListener('click',writeStories);