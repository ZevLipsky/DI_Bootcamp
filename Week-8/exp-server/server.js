const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./data/products.js');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname +'/public'));

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
})

//CRUD
//DELETE - Delete - delete a product
app.delete('/api/products/:id',(req,res)=>{
  const {id} = req.params;
  db('products')
  .where({id})
  .del()
  .returning('*')
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    res.status(404).json({msg:'product not found...'})
  })

})

// Update - Put - Update/Modify a product
app.put('/api/products/:id',(req,res)=>{
  const {id} = req.params;
  const {name, price} = req.body;

  db('products')
  .where({id})
  .update(req.body)
  .returning('*')
  .then(rows => {
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:e.messgae})
  })


})

//Create - Post create a new product
app.post('/api/products',(req,res)=>{
  const {name, price} = req.body;
  db('products')
  .insert({
    name:name,
    price:price
  })
  .returning('*')
  .then(rows => {
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:e.messgae})
  })
})



// Read - GET - get all produacts
app.get('/api/products', (req,res) => {
  db('products')
  .select('id','name','price')
  .then(rows => {
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:e.messgae})
  })
})

//Read - Get - search for product - query
app.get('/api/search', (req,res)=>{
  const {q} = req.query;
  db('products')
  .select('id','name','price')
  .whereILike('name', `${q}%`)
  .then(rows=>{
    if(rows.length === 0){
      return res.status(404).json({msg:'not found'})
    }
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:e.messgae})
  })
})

//Read - Get - get onw product with params
app.get('/api/products/:id',(req,res)=>{
  const {id} = req.params;
  db('products')
  .select('id','name','price')
  .where({id})
  .then(rows=>{
    if(rows.length === 0){
      return res.status(404).json({msg:'not found'})
    }
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:e.messgae})
  })
})
