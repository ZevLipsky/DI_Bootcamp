import express from 'express'

const app = express();
import dotenv from 'dotenv'
import cors from 'cors'
import  db  from "./config/pgdb.js";
import products_router from  './routes/products.js'
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       port : 5432,
//       user : 'postgres',
//       password : '1234',
//       database : 'public'
//     }
//   });

  dotenv.config();
  app.use(cors());


//   app.get('/products', (req,res)=>{
//     db('products')
//     .select('id','name','price')
//     .then(rows =>{
//         res.json(rows)
//     })
//     .catch(e => {
//         console.log(e);
//     })
//   })

    app.use(products_router);

  app.listen(process.env.PORT || 8080,()=>{
    console.log(`running on port ${process.env.PORT || 8080}`);
  })

  