const mongoose = require('mongoose');

const replyModel = new mongoose.Schema({
    content:{
        type: String,
        default: null
    },
    sender:{
        type: String, // sender name
        required: true
    }
});

module.exports = mongoose.model('replyModel', replyModel);