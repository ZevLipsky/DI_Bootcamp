const express = require('express');
const {products} = require('./modules/data.js')

const app = express();

app.listen(5000, ()=>{
    console.log('running on 5000');
})

app.use('/', express.static(__dirname + '/public'))

app.get('/api/products', (req,res)=>{
    
    res.json(products)
})

app.get('/api/products/:productsId', (req,res)=>{
    console.log(req.params);
    const {productId} = req.params;
    const product = products.find(item => {
        return item.id == productId
    })
    res.json(product);
})