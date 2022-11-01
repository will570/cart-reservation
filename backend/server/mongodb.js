const mongoose = require('mongoose');

const url = process.env.MONGO_URL; 

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }); 
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