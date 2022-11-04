const userModel = require ('../models/userModel'); 


const user = async (req, res) => {
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

module.exports = {
    user, 
    signUp, 
    login
}

//require versus import 