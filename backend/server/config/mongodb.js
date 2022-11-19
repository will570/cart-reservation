const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL; 

const connectDB = async () => {
    try {
        // await mongoose.connect(url, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }); 
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error); 
        throw error;
    }
};

mongoose.connection.on("Disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = connectDB; 