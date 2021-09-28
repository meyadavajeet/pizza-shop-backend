const express = require('express');
const morgan = require('morgan');
require('colors');

const dotenv = require('dotenv');
const connectDbs = require('./config/config');

//config dotenv
dotenv.config();

//connction for Mongodb
connectDbs();


const app = express();

// ---MiddleWare---//
app.use(express.json());
app.use(morgan("dev"));


//route
app.get('/',(req,res)=>{
    res.send('<h1>Hello from node server from nodemon</h1>');
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
console.log(`server running on ${process.env.NODE_ENV}`.bgGreen.white);
})