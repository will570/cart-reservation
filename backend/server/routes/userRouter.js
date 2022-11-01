const express = require('express'); 

const {
    user, 
    signUp, 
    login, 
    getUserWithToken
} = require ('../controllers/userController'); 

const userRouter = express.Router();

userRouter.get('/', user);

//Logic 
userRouter.get('/signUp', signUp); 
userRouter.get('/login', login); 
userRouter.get('/userInfo', getUserWithToken);



//this will need to be refactored into the controllers folder 

// userRouter.post("/", async (req, res) => {
//     const newUser = new User(req.body);
    
//     try {
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// });
// userRouter.put("/:id", async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, 
//             { $set: req.body }, 
//             { new: true });
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// });

module.exports = userRouter; 