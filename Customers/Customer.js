const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//connect to our database
mongoose.connect('mongodb://chandra18:chandra18@ds135335.mlab.com:35335/customerservice',{ useNewUrlParser: true },()=>{
    console.log('successfully connect to DB!');
});

require('./customermodel');
const customer = mongoose.model('customermodel');
app.post('/customer',(req,res)=>{
var newCustomer = {
    name : req.body.name,
    age : req.body.age,
    address: req.body.address
}
var Customer = new customer(newCustomer);
Customer.save().then(()=>{
  res.send('customer created!!');  
}).catch((err)=>{
if(err){
    throw err;
}
})
});
app.get('/listallcustomer',(req,res)=>{
customer.find().then((customer)=>{
    res.json(customer);
}).catch((err)=>{
    if(err){
        throw err;
    }
})
});
app.get('/customer/:id',(req,res)=>{
customer.findById(req.params.id).then((customer)=>{
    if(customer){
        res.json(customer);
    }else{
        res.send('invalid id');
    }
}).catch((err)=>{
    if(err){
        throw err;
    }
})
});

app.delete('/deletecustomer/:id',(req,res)=>{
customer.findByIdAndRemove(req.params.id).then(()=>{
    res.send('customer deleted with success!!');
}).catch((err)=>{
    if(err){
        throw err;
    }
})
});

app.listen(3001,()=>{
    console.log('up and running-- customer services');
});