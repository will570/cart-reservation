const mongoose = require('mongoose'); 

const userModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
    uid:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    token: {
        type: String, 
        default: ''
    }
});

module.exports = mongoose.model('userModel', userModel);