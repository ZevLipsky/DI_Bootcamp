/*
1. npm init, npm init -y
2.install packages you need - express, cors, axios,dotenv
3.make changes to package,json
4.npm start
5.create env
6.create express server

*/ 

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { json } = require('express');
// const { json } = require('express');


dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(process.env.PORT||8008, ()=>{
    console.log((`run on port ${process.env.PORT||8080}`));
})

app.post('/login', (req,res)=>{
    const {email,password} =req.body
    
   let users = [];

   try{
       const f =fs.readFileSync('./users');
       users = JSON.parse(f.toString())
   }
   catch(e){
       console.log(e);
   }

   if(!isUserExist(users, email)){
       return res.json({msg:'user does not exist'})
   }

   const userData = users.find(user =>{
    return user.email == email
   })
   console.log('userData=>', userData);

   const match = bcrypt.compareSync(password, userData.password);

   if(!match){
    return res.json({msg:'wrong password'})
   }
   
    res.json({msg:'login succesfully'})
})

app.post('/register', (req,res)=>{
    console.log(req.body);
    // const salt = bcrypt.genSaltSync(3);
    // const hash = bcrypt.hashSync(req.body.password,salt);
    
   let users = [];

    try{
        const f =fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    }
    catch(e){
        console.log(e);
    }

    if(isUserExist(users, req.body.email)){
        return res.json({msg:'email exist'})
    }

    const salt = bcrypt.genSaltSync(3);
    const hash = bcrypt.hashSync(req.body.password,salt);
    

    req.body.password = hash    
    users.push(req.body);

    fs.writeFile('./users', JSON.stringify(users), err =>{
        if(err){
            console.log(err);
        }
    })

    res.json(users)
})

const isUserExist = (arr, email) =>{
    const filterUsers = arr.filter(user =>{
        return user.email == email;
    })
    return (filterUsers.length > 0) ? true : false
}