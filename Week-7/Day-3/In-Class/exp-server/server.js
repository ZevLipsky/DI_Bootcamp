const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {products} = require('./data/products.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
})

app.delete('/api/products/:id', (req,res) =>{
    const {id}= req.params;
    const index = products.findIndex(item => {
        return item.id == id
    })
    if(index===-1){
        return res.status(404).json({msg:'not found'})
    }

    products.splice(index,1)
    res.json(products)
})


app.put('/api/products/:id', (req,res) =>{
    const {id} = req.params;
    const {name ,price} = req.body;

    const index = products.findIndex(item =>{
        return item.id == id
    })
    const updatedProduct = {
        id:id,
        name:name,
        price:price
    }

    products[index] = updatedProduct;

    res.json(products)
})


app.post('/api/products', (req,res) =>{
    const {name, price} = req.body;
    const newProduct = {
        id: products.length+1,
        name:name,
        price: price
    }
    products.push(newProduct)
    res.json(products)
})

app.get('/api/products', (req,res) =>{
    res.json(products)
})

app.get('/api/search', (req,res) =>{
    const {q} = req.query;
    const result = products.filter(item => {
        return item.name.toLowerCase().includes(q.toLowerCase())
    })

    if(res.length === 0){
        return res.status(200).json({msg:'no products found'})
    }
    res.json(result)
})

app.get('/api/products/:id', (req,res) => {
    const {id} = req.params;
    const product = products.find(item =>{
        return item.id == id
    })

    if(!product){
        return res.status(404).json({msg:'not found'})
    }
    res.json(product)
})