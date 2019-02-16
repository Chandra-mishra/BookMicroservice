//load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookService = require('../Books/controller');
//load mongoose
const mongoose = require('mongoose');
app.use(bodyParser.json());
//connect
mongoose.connect(,()=>{
    console.log("db connected!!");
});

app.use('/book',bookService);
app.listen(3000,()=>{
console.log("up and running! --this is your book service.");
});
