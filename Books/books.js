//load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookService = require('../Books/controller');
//load mongoose
const mongoose = require('mongoose');

//require('../Books/controller');

/*require('./bookmodel');
const Book = mongoose.model('bookmodel');
*/

app.use(bodyParser.json());
//connect
mongoose.connect('mongodb://chandra18:chandra18@ds335275.mlab.com:35275/bookservice',{ useNewUrlParser: true },()=>{
    console.log("db connected!!");
});
/*app.get('/',(req,res)=>{
    res.send("this is our book service");
});
//create func
app.post('/book',(req,res)=>{
   var newBook = {
       title : req.body.title,
       author : req.body.author,
       numPages : req.body.numPages,
       publisher : req.body.publisher
   }
   //create new book
   var book = new Book(newBook);

   book.save().then(()=>{
       console.log('new book created');
   }).catch((err)=>{
       if(err){
           throw err;
       }
 });
 res.send('A new book created with sucess!');
});

app.get('/books',(req,res)=>{
    Book.find().then((books)=>{
        res.json(books);
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
});

app.get('/book/:id',(req,res)=>{
Book.findById(req.params.id).then((book)=>{
if(book){
    res.json(book);
}else{
    res.sendStatus(404);
}
}).catch(err=>{
    if(err){
        throw err;
    }
});
});
app.delete('/deletebook/:id',(req,res)=>{
    Book.findOneAndRemove(req.params.id).then(()=>{
        res.send('book removed with success');
    }).catch(err=>{
        if(err){
            throw err;
        }
        
    });
});*/
app.use('/book',bookService);
app.listen(3000,()=>{
console.log("up and running! --this is your book service.");
});