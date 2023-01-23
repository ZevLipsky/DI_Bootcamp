import {getAllProducts}  from "../modules/products.js";

export const _getAllProducts = (req,res) => {
    getAllProducts()
    .then(rows => {
        res.json(rows)
    })
    .catch(e =>{
        console.log(e);
    })
}