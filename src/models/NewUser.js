const mongoose = require('mongoose')

const NewUser = mongoose.model('NewUser', {
    name:String,
    email:String,
    password:String,
    birthDate:Number,

});


module.exports = NewUser;