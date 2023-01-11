const login = () => {
    fetch('http://localhost:3001/login')
    .then(res => res.text())
    .then(data =>{
        console.log(data);
    })
}


const searchProduct = () => {
    const input = document.getElementById('search').value;
    fetch(`http://loacalhost:3001/api/search/${input}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showProducts(data)

    })
    .catch(e => {
        console.log(e);
    })
}

const showProducts = (arr) =>{
    const html = arr.map(item=>{
        return `<div>${item.name} ${item.price}</div>`
    })
    document.getElementById('root').innerHTML = html.join('');
}



const getProducts = async () => {
    try{
        const ret = await fetch('http://localhost:3001/api/products');
        const data = await ret.json();
        console.log(data);
        showProducts(data)
    }
    catch(e){
        console.log(e);
    }
}
getProducts()