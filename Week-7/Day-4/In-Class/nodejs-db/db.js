const knex = require('knex')

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : 'arjuna.db.elephantsql.com',
      port : 5432,
      user : 'otjndotj',
      password : '6J0Xk5jY16Ipv9yFvQO5LbYgvpejWF1N',
      database : 'otjndotj'
    }
  });
  db('products')
  .select('id', 'name', 'price')
//   .where({id: 3})
//   .orWhere({id: 2})
//   .from('products')
     .then(data =>{ 
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      })

//   db.raw('SELECT * from products ') 
//   .then(res =>{
//     console.log(res.rows);
//   })
//   .catch(e => {
//     console.log(e);
//   })