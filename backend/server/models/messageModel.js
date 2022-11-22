const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    sender:{
        type: String, // uid from which the message originates
        required: true
    },
    replies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'replyModel'
    }]
}, {timestamps: true});

module.exports = mongoose.model('messageModel', messageModel);