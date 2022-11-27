const express =require('express');
const cors =require("cors");

app.use('/pic',express.static(__dirname));
app.use('/form',express.static(__dirname+'/public'));
app.use(cors());

const app=express();
app.listen(8080);
app.get('/aboutMe/:hobby',(req,res)=>{
    const {hobby}=req.params;
    if(typeof hobby !== 'string'){
        res.status(404).json({hobby:'not found'});
    }
    res.json({hobby:hobby});
})


app.get('/form/formData',(req,res)=>{
    const {email,message}=req.query;
    res.end(`<p>${email} sent you a message: ${message}`);
})