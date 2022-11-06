const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const replyModel = require('./replyModel')

const messageModel = new mongoose.Schema({
    content:{
        type: String,
        default: null
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