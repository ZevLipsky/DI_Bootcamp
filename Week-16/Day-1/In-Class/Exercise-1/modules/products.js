
import db from '../config/pgdb.js'

 export const getAllProducts =  () => {
  return db('products')
  .select('id', 'name', 'price')
  .orderBy('name');
}