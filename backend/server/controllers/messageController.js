const messageModel = require("../models/messageModel");
const replyModel = require("../models/replyModel");

const addMessage = async (req, res) => {
    try {
        const newMessage = new messageModel(req.body);
        await newMessage.save();
        return res.status(200).json("message added");
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getAllMessages = async (req, res) => {
    try {
        const allMessages = await messageModel.find();
        return res.status(200).json(allMessages);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const editMessage = async (req, res) => {
    try {
        const _id = req.params;
        const message = await messageModel.findById(_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        const editedMessage = await messageModel.findByIdAndUpdate(
            _id, 
            {$set: req.body}, 
            {new: true});
        return res.status(200).json(editedMessage);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const deleteMessage = async (req, res) => {
    try {
        const _id = req.params;
        const toBeDeletedMessage = await messageModel.findById(_id);
        if (!toBeDeletedMessage) {
            return res.status(404).json("message not found");
        }
        await messageModel.findByIdAndDelete(_id);
        return res.status(200).json("message deleted");
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getCreatedTime = async (req, res) => {
    try {
        const _id = req.params;
        const message = await messageModel.findById(_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        const createdTime = message.createdAt;
        return res.status(200).json(createdTime);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getUpdatedTime = async (req, res) => {
    try {
        const _id = req.params;
        const message = await messageModel.findById(_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        const updatedTime = message.updatedAt;
        return res.status(200).json(updatedTime);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const addReply = async (req, res) => {
    try {
        const {msg_id, reply_id} = req.params;
        const message = await messageModel.findById(msg_id);
        const reply = await replyModel.findById(reply_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        if (!reply) {
            return res.status(404).json("reply not found");
        }
        await messageModel.findByIdAndUpdate(
            msg_id,
            {$push: {replies: reply}},
            {new: true});
        return res.status(200).json("reply added to message");
    } catch (err) {
        return res.status(401).json(err);
    }
}

// remember to call deleteReply() under replyController
const deleteReply = async (req, res) => {
    try {
        const {msg_id, reply_id} = req.params;
        const message = await messageModel.findById(msg_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        for (let i = 0; i < message.replies.length; i++) {
            if (message.replies[i] == reply_id) {
                await messageModel.findByIdAndUpdate(
                    msg_id,
                    {$pull: {replies: reply_id}},
                    {new: true});
                return res.status(200).json("reply deleted");
            }
        }
        return res.status(404).json("reply not found");
    } catch (err) {
        return res.status(401).json(err);
    }
}

// currently returns a list of reply IDs
const getAllReplies = async (req, res) => {
    try {
        const _id = req.params;
        const message = await messageModel.findById(_id);
        if (!message) {
            return res.status(404).json("message not found");
        }
        const allReplies = message.replies;
        return res.status(200).json(allReplies)
    } catch (err) {
        return res.status(401).json(err);
    }
}

module.exports = {
    addMessage,
    getAllMessages,
    editMessage,
    deleteMessage,
    getCreatedTime,
    getUpdatedTime,
    addReply,
    deleteReply,
    getAllReplies
}