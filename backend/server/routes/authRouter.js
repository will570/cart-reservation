const express = require ('express'); 

const {
    auth 
} = require ('../controllers/authController'); 

const authRouter = express.Router();

authRouter.get("/", auth); 

module.exports = authRouter; 