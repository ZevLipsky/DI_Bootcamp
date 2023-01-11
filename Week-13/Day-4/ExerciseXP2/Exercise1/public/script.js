// In the script.js file, fetch your server and get the response. 
//The response should be the JSON Object. console.log this object and display it on the HTML. 
const fetchServer = () => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showName(data)
    })
    .catch(e =>{
        console.log(e);
    })
}
fetchServer();

const showName = (data) =>{
    const html = arr.map(item =>{
        return `<div>${item.firstname} ${item.lastname}</div>`
    })
    document.getElementById('root').innerHTML = html.join('');
}

