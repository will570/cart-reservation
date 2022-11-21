const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userModel = require ('../models/userModel'); 

signUp = async (req, res) => {

    try {

        //Get user input 
        const { name, email, uid, password } = req.body; 

        //Validate user input 
        if (!(name && email && uid && password)){
            res.status(400).json({ message: "User must fill in all fields" });  //returns a json object to the client 
            return; 
        }

        const uidRegex = /^([0-9]){9}$/g; 
        if (!uid.match(uidRegex)) {
            res.status(400).json({ message: "Please input a valid UID!" }); 
            return;
        }

        const uclaEmailRegex = /^[A-Za-z0-9._%+-]+@(g.)ucla.edu/g;
        if (!email.match(uclaEmailRegex)) {
            res.status(400).json({ message: "Please input a valid ucla email!" }); 
            return;
        }

        //Check for existing user 
        const existingUID = await userModel.findOne({ uid });
        const existingEmail = await userModel.findOne( { email }); 

        if (existingUID) {
            res.status(400).json({ message: "A user with this UID already exists" }); 
            return; 
        }

        if (existingEmail) {
            res.status(400).json({ message: "A user with this email already exists" }); 
            return;
        }

        //Encrypt password 
        const encryptedPassword = await bcrypt.hash(password, 10);

        //Set admin status 
        let adminStatus = false; 

        if (uid === "000000000"){
            adminStatus = true; 
        }

        //Create user 
        const newUser = await userModel.create({
            name, 
            uid, 
            email: email.toLowerCase(), //clean up input 
            password: encryptedPassword, 
            isAdmin: adminStatus
        });

        //Create token 
        const token = jwt.sign(
            {uid, newUser_id: newUser._id}, 
            process.env.TOKEN_KEY, 
            { expiresIn: "1d", }
        );

        newUser.token = token; 

        //Return new user 
        res.status(200).json(newUser); 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

signIn = async (req, res) => {

    try{

        //Get user input 
        const { uid, password } = req.body; 

        //Validate user input 
        if (!(uid && password)){
            res.status(400).json({ message: "User must fill in all fields" });  
            return; 
        }

        const uidRegex = /^([0-9]){9}$/g; 
        if (!uid.match(uidRegex)) {
            res.status(400).json({ message: "Please input a valid UID!" }); 
            return;
        }

        //Check if user exists in database 
        const existingUser = await userModel.findOne({ uid });

        if (!existingUser) {
            res.status(404).json({ message: "User not found, please sign up" });
            return;
        }

        //Validate password 
        const correctPassword = await bcrypt.compare(password, existingUser.password);
        if (!correctPassword) {
            res.status(400).json({ message: "Incorrect password" });
            return;
        }

        //Create token for session 
        const token = jwt.sign(
            {uid}, 
            process.env.TOKEN_KEY, 
            { expiresIn: "1d", }
        );

        //existingUser.token = token; 
        
        console.log("login successful"); 
        res.status(200).json({token: token}); 
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

// getUser = async (req, res) => {
//     try {
//         const user = await UserModel.find
//     }
// }

module.exports = { 
    signUp, 
    signIn
}
