const dotenv = require('dotenv');
const express = require ('express');
const cors = require ('cors');
const connectDB = require('./mongodb');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; 

//Connect to database
connectDB();


//Middlewares
app.use(cors());
app.use(express.json());

//Define routes 
//app.use("/api/auth", require('./routes/authRouter'));
app.use("/api/user", require('./routes/userRouter'));
app.use("/api/cart", require('./routes/cartRouter'));
app.use("/api/building", require('./routes/buildingRouter'));
app.use("/api/reservation", require('./routes/reserveRouter'));
app.use("/api/message", require('./routes/messageRouter'));
app.use("/api/reply", require('./routes/replyRouter'));

//Connect to port
app.listen(PORT, () => {
    console.log(`Connected to server on port ${PORT}`);
});