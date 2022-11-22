const getProduts =() => { 
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
        createProducts(data);
    })
    .catch(e => {
        console.log(e);
    })
}
getProduts();

const createProducts = (arr) => {
    const root =document.getElementById('root')
    arr.forEach((item, i) =>{
        let div = document.createElement('div');
        div.innerText = item.name + ' '  + item.price
        root.appendChild(div)
       });
}