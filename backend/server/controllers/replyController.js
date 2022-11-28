const replyModel = require('../models/replyModel');

const addReply = async (req, res) => {
    try {
        const newReply = new replyModel(req.body);
        await newReply.save();
        return res.status(200).json(newReply._id);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getAllReplies = async (req, res) => {
    try {
        const allReplies = await replyModel.find();
        return res.status(200).json(allReplies);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const editReply = async (req, res) => {
    try {
        const _id = req.params;
        const reply = await replyModel.findById(_id);
        if (!reply) {
            return res.status(404).json("reply not found");
        }
        const editedReply = await replyModel.findByIdAndUpdate(
            _id, 
            {$set: req.body}, 
            {new: true});
        return res.status(200).json(editedReply);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const deleteReply = async (req, res) => {
    try {
        const _id = req.params;
        const toBeDeletedReply = await replyModel.findById(_id);
        if (!toBeDeletedReply) {
            return res.status(404).json("reply not found");
        }
        await replyModel.findByIdAndDelete(_id);
        return res.status(200).json("reply deleted");
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getCreatedTime = async (req, res) => {
    try {
        const _id = req.params;
        const reply = await replyModel.findById(_id);
        if (!reply) {
            return res.status(404).json("reply not found");
        }
        const createdTime = reply.createdAt;
        return res.status(200).json(createdTime);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getUpdatedTime = async (req, res) => {
    try {
        const _id = req.params;
        const reply = await replyModel.findById(_id);
        if (!reply) {
            return res.status(404).json("reply not found");
        }
        const updatedTime = reply.updatedAt;
        return res.status(200).json(updatedTime);
    } catch (err) {
        return res.status(401).json(err);
    }
}

module.exports = {
    addReply,
    getAllReplies,
    editReply,
    deleteReply,
    getCreatedTime,
    getUpdatedTime
}