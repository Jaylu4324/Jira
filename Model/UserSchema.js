const mongoose = require('mongoose')

const Userschema =mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Userschema',Userschema)