const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.set('view engine', 'ejs');

app.use(cors());
app.use('/', express.static(__dirname+'./public'));

app.listen(process.env.PORT||8080, ()=>{
    console.log(`Running on ${process.env.PORT||8080}`);
})

app.get('/home', (req,res)=>{
    res.render('index')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/shop', (req,res)=>{
    const products = [
        {id:1, name:'iPhone', price:800},
        {id:2, name:'iPad', price:700},
        {id:3, name:'iWatch', price:600}

    ]
    res.render('shop',{
        data:products
    });
})