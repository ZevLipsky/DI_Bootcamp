const { request, response } = require('express');
const express = require('express');
const {products} = require('./products');
console.log(products);

const app = express();

app.listen(3001, () =>{
    console.log('Running on port 3001');
})

app.use('/', express.static(__dirname+'/public'))


app.get('/login', (request, response)=>{[
    response.send('Hello, welcome to my first nodejs server, Please login')
]})

app.get('/register', (req, res)=>{
    res.send('Please register')
})

app.get('/api/products', (req,res) =>{
    res.json(products);
})

app.get('/api/search/:product_id', (req,res)=>{
    console.log(req.params);
    const product = products.find(item => {
        return item.id == req.params.product_id
    })
    console.log(product);
    res.json([product])
})