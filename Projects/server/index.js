import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
//Routes

dotenv.config();
const app = express();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.listen(process.env.PORT || 8080 ,()=>{
    console.log(`server running on ${process.env.PORT||8080}`);
})

//usage of routes
app.use('/auth', AuthRoute)