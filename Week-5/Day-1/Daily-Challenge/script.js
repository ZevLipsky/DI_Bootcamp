document.querySelector("#submit").addEventListener("click", retrieveData)

function retrieveData(event){
    const names={
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value
    }
    const namesJson = JSON.stringify(names)
    const newInput = document.createElement('input')
    input.textContent = namesJson;
    document.body.appendChild(input);

}