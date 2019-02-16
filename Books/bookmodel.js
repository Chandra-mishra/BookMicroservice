const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
 //   Title,author,numberPages,publisher

 title :{
     type : String,
     required: true
 },
 author:{
     type: String,
     required: true
 },
 numberPages:{
     type : Number,
     required : false,
 },
 publisher: {
      type : String,
      required : false
 }
});
module.exports = mongoose.model('bookmodel',bookschema);