const express = require('express'); 

const {
    signUp, 
    signIn, 
    //getUser
} = require ('../controllers/userController'); 

const { verifyToken } = require ('../controllers/authController'); 

const userRouter = express.Router();

//Logic 
userRouter.post('/signUp', signUp); 
userRouter.post('/signIn', signIn); 
//userRouter.get('/userInfo', verifyToken, getUser);


module.exports = userRouter; 