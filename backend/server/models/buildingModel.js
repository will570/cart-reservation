const mongoose = require('mongoose'); 

const buildingModel = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    carts:{
        type: [Number] // array of cart id
    }
});

module.exports = mongoose.model('buildingModel', buildingModel);