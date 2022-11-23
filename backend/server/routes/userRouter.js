const express = require('express'); 

const {
    signUp, 
    signIn, 
    getUserNameByUID
} = require ('../controllers/userController'); 

const { verifyToken } = require ('../controllers/authController'); 

const userRouter = express.Router();

//Logic 
userRouter.post('/signUp', signUp); 
userRouter.post('/signIn', signIn); 
userRouter.get('/getUserName/:uid', getUserNameByUID);


module.exports = userRouter; 