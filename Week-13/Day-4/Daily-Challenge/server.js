// nstructions
// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req,res)=>{

})
app.get('/aboutMe/:hobby', (req,res)=>{
    const {hobby} = req.params;
    if (typeof(hobby) != 'string'){
        res.status(404).send('Not a string!');
    }else{
        res.send(hobby);
    }
})

app.get('/pic', (req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send(`<html><body><img src ="https://media.istockphoto.com/id/1201041782/photo/alpaca.jpg?s=612x612&w=0&k=20&c=aHFfLZMuyEyyiJux4OghXfdcc40Oa6L7_cE0D7zvbtY="</body></html>`);
});

app.use('/form', express.static(__dirname + "/public"));

app.listen(3000, () =>{
    console.log('Listing on 3000');
})

app.use(bodyParser.urlencoded({extended: true}));
app.post('/formdata', (req,res)=>{
    res.send(`${req.body.firstname} ${req.body.lastname} with the email ${req.body.email} sent you a message that says ${req.body.message}.`)
})