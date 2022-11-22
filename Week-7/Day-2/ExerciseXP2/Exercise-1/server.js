//Exercise1

const express = require("express");
const app = express();

app.get("/name", (req,res) => {
    res.json({firstname: 'John',lastname: 'Doe'});
});

app.listen(3000, () => {
    console.log("Listening..");
})

app.use("/", express.static(__dirname + "/public"));

//Exercise2
// const express = require('express');
// const app = express();
// app.get('/:id',(req, res) => {
//     console.log("req.params: ", req.params)
//     res.send({id: req.params.id})
       
//     });

// app.listen(3000, () => {
//     console.log('running on 3000');
// })


//Exercise3
// const express = require('express');
// const app = express();
// app.use('/', express.static(__dirname + '/public'))


// app.listen(3000, () => {
//     console.log('running on 3000');
// })