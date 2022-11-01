const userModel = require ('../models/userModel'); 

user = async (req, res) => {
    res.send('user page endpoint!'); 
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
//hello