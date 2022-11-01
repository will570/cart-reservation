require('dotenv').config();
const express = require ('express');
const cors = require ('cors');
const connectDB = require('./mongodb');

const app = express();
const PORT = process.env.PORT || 5000; 

//Connect to database
connectDB();

//Middlewares
//app.use(cors());
app.use(express.json());

//Define routes 
app.use("/api/auth", require('./routes/authRouter'));
app.use("/api/user", require('./routes/userRouter'));

//Connect to port
app.listen(PORT, () => {
    console.log(`Connected to server on port ${PORT}`);
});