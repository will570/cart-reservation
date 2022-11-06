const express = require('express');

const {
    addReply,
    getAllReplies,
    editReply,
    deleteReply,
    getCreatedTime,
    getUpdatedTime
} = require('../controllers/replyController');

const replyRouter = express.Router();

// safe to use
replyRouter.post('/addReply', addReply);
replyRouter.get('/getAllReplies', getAllReplies);
replyRouter.put('/editReply/:_id', editReply);
replyRouter.delete('/deleteReply/:_id', deleteReply);
replyRouter.get('/getCreatedTime/:_id', getCreatedTime);
replyRouter.get('/getUpdatedTime/:_id', getUpdatedTime);

module.exports = replyRouter;