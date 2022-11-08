const express = require('express'); 

const {
    verifyToken, 
    verifyAdmin
} = require ('../controllers/authController'); 

const authRouter = express.Router();

authRouter.get("/verifyAuth", verifyToken, (req, res) => {
    res.status(200).json({ message: "welcome, verified user" }); 
}); 

authRouter.get("/verifyAdmin", verifyAdmin); 

module.exports = authRouter; 