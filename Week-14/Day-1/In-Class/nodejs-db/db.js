const knex =  require('knex');

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
//  .select('id', 'name', 'price')
// .update({price:800})
 .where({name:'iPhone'})
 .del()
// .insert([
//     {name:'iEye', price:888},
//     {name:'iFLy', price:9999}
// ])
 .returning('*')
 .then(rows => {
    console.log(rows);
 })     
 .catch(e =>{
    console.log(e);
 })