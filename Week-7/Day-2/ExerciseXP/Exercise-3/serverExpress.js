const express=require('express');
const app=express();
app.listen(3000,()=>console.log('listening at 3000...'));
app.get('/',(req,res)=>{
    res.end('<h1>This is an HTML Tag</h1>');
})