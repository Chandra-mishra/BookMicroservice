const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
app.use(bodyParser.json());
mongoose.connect(,()=>
{
console.log('connected to DB!!');
});
//model is loaded
require('./ordermodel');
const Order = mongoose.model('ordermodel');

//will create new order

app.post('/order',(req,res)=>{
var newOrder = {
    //convert string to objectid
    CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
    BookID: mongoose.Types.ObjectId(req.body.BookID),
    initialDate: req.body.initialDate,
    deliveryDate: req.body.deliveryDate
}
var order = new Order(newOrder);

order.save().then(()=>{
    console.log('order created with success!!');
}).catch((err)=>{
    if(err){
        throw err;
    }
})
});
app.get('/listallorders',(req,res)=>{
    Order.find().then((books)=>{
        res.json(books)
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
});
app.get('/order/:id',(req,res)=>{
Order.findById(req.params.id).then((order)=>{
    if(order){
     axios.get('http://localhost:3001/customer/'+order.CustomerID).then((response)=>{
         var orderObject = {customerName : response.data.name,
           bookTitle: '' 
             
         }
         axios.get('http://localhost:3000/book/'+order.BookID).then((response)=>{
             orderObject.bookTitle = response.data.title;
             res.json(orderObject);
         })
     })
     //res.send('Quick response');
     
    }else{
        res.send('invalid order');
    }
})
});


app.listen(3002,()=>{
    console.log('up and running -- order services!!');
});
