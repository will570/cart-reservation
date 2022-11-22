const express = require('express'); 

const {
    addMessage,
    getAllMessages,
    editMessage,
    deleteMessage,
    getCreatedTime,
    getUpdatedTime,
    addReply,
    deleteReply,
    getAllReplies
} = require('../controllers/messageController');

const {
    verifyToken,
  } = require('../controllers/authController');

const messageRouter = express.Router();

messageRouter.post('/addMessage', addMessage);
messageRouter.get('/getAllMessages', getAllMessages);
messageRouter.put('/editMessage/:_id', editMessage);
messageRouter.delete('/deleteMessage/:_id', deleteMessage);
messageRouter.get('/getCreatedTime/:_id', getCreatedTime);
messageRouter.get('/getUpdatedTime/:_id', getUpdatedTime);
// weird bug: if change ':_id' to ':msg_imd', gives object cast error
messageRouter.get('/getAllReplies/:_id', getAllReplies);

// use with caution: the same reply should not occur in different messages
messageRouter.put('/addReply/:msg_id/:reply_id', addReply);
messageRouter.put('/deleteReply/:msg_id/:reply_id', deleteReply);

module.exports = messageRouter;