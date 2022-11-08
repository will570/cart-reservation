const jwt = require('jsonwebtoken');
//this page is used as middleware

//verify token method used as middleware each time user acts (reserve, post message, etc.)
//e.g. messageRouter.post('/addMessage', verifyToken, addMessage);
verifyToken = async(req, res, next) => { 
    const token = req.body.token || req.query.token || req.headers["x-access-token"]; 

    if(!token){
        res.status(403).json({ message: "Token required for authentication" }); 
        return; 
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY); 
        req.user = decoded; 
    } catch(error) {
        res.status(401).json({ message: "Authentication failed" });
        return; 
    }

    return next(); 
}

verifyAdmin = async (req, res, next) => { //used to show admin page 
    
    try {
        const { id } = req.user;
        const user = await userModel.findOne({ _id: id });

        if (user.isAdmin) {
            next(); 
        } else {
            res.status(401).json({ message: "User is not authoritzed as admin" }); 
        }

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
} 

module.exports = {
    verifyToken, 
    verifyAdmin
}