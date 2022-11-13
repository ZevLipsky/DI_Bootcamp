let button    =document.querySelector('#button')
let names      =document.querySelector('#name')
let height    =document.querySelector('#height')
let mass      = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')



function getInfo(){
    loading()
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://www.swapi.tech/api/people/' + randomNumber

    axios.get(apiUrl).then(response =>{
        updateInfo(response.data)
    }).catch(e => {
        showError()
    })
}

function updateInfo(data){
    names.innerText   = `Name : ${data.name}`
    height.innerText = `Height: ${data.height}`
    mass.innerText   = `Mass: ${data.mass}`
    birthYear.innerText = `Birth Year ${data.birth_year}` 
}

    function showError(){
        names.innerText = "Oh N0! That person isn't available."
        height.innerText = ''
        mass.innerText   = ''
        birthYear.innerText = ''
    }

    function loading(){
        names.innerHTML =  ' Loading... <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>'
        height.innerText = ''
        mass.innerText   = ''
        birthYear.innerText = ''
        

    }
button.addEventListener('click', getInfo)