// const BASE_URL = 'http://localhost:5000';

const getProducts = () => {
  fetch('/api/products')
  .then(res => res.json())
  .then(prods => {
    console.log(prods);
  })
  .catch(e => {
    console.log(e);
  })
}


const createProduct = () => {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  // fetch(url, option)
  fetch('/api/products/7', {
    method:'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })


}
