const express = require('express'); 

const {
    signUp, 
    signIn, 
} = require ('../controllers/userController'); 

const userRouter = express.Router();

//Logic 
userRouter.post('/signUp', signUp); 
userRouter.post('/signIn', signIn); 

//userRouter.get('/userInfo', getUser);


module.exports = userRouter; 