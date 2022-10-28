import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(err)
    }
});
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, 
            { $set: req.body }, 
            { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(err)
    }
});

export default router;