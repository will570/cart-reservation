const mongoose = require('mongoose');

const reservationModel = new mongoose.Schema({
    uid:{
        type: String,
        required: true
    },
    cartId:{
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('reservationModel', reservationModel);