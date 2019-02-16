const mongoose = require('mongoose');

mongoose.model('customermodel',{
    name:{
        type : String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});