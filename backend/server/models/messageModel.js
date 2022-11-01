const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    content:{
        type: String,
        default: null
    },
    sender:{
        type: String, // user name from which the message originates
        required: true
    },
    replies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'replyModel'
    }]
});

module.exports = mongoose.model('messageModel', messageModel);