const express = require('express')
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.post('/users', (req,res)=>{
    let users = [];
    try {
        const users_json = fs.readFileSync('users', 'utf-8');
        users = JSON.parse(users_json)
    } catch (error) {
        console.log(error);
    }
    users.push(req.body);

    fs.writeFile('users', JSON.stringify(users), 'utf-8', (err)=>{
        if (err) {
            console.log(err);
        }
        res.send(`${req.body.name} was saved`)
    })
})



app.get('/users', (req, res) =>{
    let users = [];
    try {
        const users_json = fs.readFileSync('users', 'utf-8');
        users = JSON.parse(users_json)
    } catch (error) {
        console.log(error);
    }
    res.json(users)
    
})


app.listen(8080, ()=>{
    console.log('runnning on 8080');
})