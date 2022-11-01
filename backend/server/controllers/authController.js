//This file is for verifying user, needs authentication logic 

auth = async (req, res) => {
    res.send("auth endpoint!"); 
}

//actions 
//1. verify user 
//2. verify admin 

module.exports = {
    auth
}