const express = require('express');
const router = express.Router();
const Book = require('./bookmodel');

router.post('/insert',(req,res)=>{
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
 
 router.get('/',(req,res)=>{
     Book.find().then((books)=>{
         res.json(books);
     }).catch(err =>{
         if(err){
             throw err;
         }
     })
 });
 
 router.get('/:id',(req,res)=>{
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
 router.delete('/deletebook/:id',(req,res)=>{
     Book.findOneAndRemove(req.params.id).then(()=>{
         res.send('book removed with success');
     }).catch(err=>{
         if(err){
             throw err;
         }
         
     });
 });

 module.exports = router;