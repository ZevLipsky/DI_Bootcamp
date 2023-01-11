const { request, response } = require('express');
const express = require('express')
const {products} = require('./modules/products.js');
const bp = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.listen(3001, () =>{
    console.log('running on 3001');
})
//GET
app.get('/api/products', (request, response) => {
    response.json(products)
})


//DELET -DELETE
app.delete('/api/products/:id', (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id)
    if(index === -1){
        return res.status(404).json({msg:'Not Found'})
    }
products.splice(index,1);
res.status(200).json(products)

})



//PUT - update a product info
//UPDATE - PUT
app.put('/api/products/:id', (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id)
    if(index === -1){
        return res.status(404).json({msg:'Not Found'})
    }

    products[index] = {...products[index], name:req.body.name, price:req.body.price}
    res.status(200).json(products)
})




//READ search product by id
app.get('/api/products/:id', (request, response) =>{
    const id = request.params.id
    const product = products.find(item => item.id == id );
    if(!product){
        return response.status(404).json({message:'Product not found'})
    }
    response.json(product);
})
//read-get- search product by name
app.get('/api/search', (req,res)=>{
    const product_name = req.query.name;
    const products_result = products.filter(item=> {
        return item.name.toLowerCase().includes(product_name.toLowerCase())
    })
    res.json({products_result})
})

//POST - to create a new products
//CREAT- POST
app.post('/api/products', (req,res)=>{
console.log(req.body);
const new_product ={
    id: products.length +1,
    name: req.body.name,
    price: req.body.price
}
products.push(new_product);
res.status(201).json(products)
})