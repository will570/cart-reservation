const mongoose = require('mongoose');

const replyModel = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    sender:{
        type: String, // sender uid
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('replyModel', replyModel);