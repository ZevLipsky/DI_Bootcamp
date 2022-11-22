function fetchServer() {
    fetch("http://localhost:3000/name")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayObj(data);
    })
    .catch(err => console.log(err));
}

fetchServer();

function displayObj(obj) {
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode(JSON.stringify(obj));
    paraElement.append(paraText);
    document.body.prepend(paraElement);
}