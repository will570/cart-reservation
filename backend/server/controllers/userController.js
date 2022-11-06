const userModel = require ('../models/userModel'); 


const user = async (req, res) => {
    // I wrote this so that I can add test element to the database
    // Please delete this when you work on this endpoint
    const newUser = new userModel(req.body);
    newUser.save();
    return res.status(200).json("user added");
}

signUp = async (req, res) => {
    res.send('sign up page!'); 
}

login = async (req, res) => {
    res.send('login page!'); 
}

// get name by uid

module.exports = {
    user, 
    signUp, 
    login
}

//require versus import 