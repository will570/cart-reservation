const mongoose = require('mongoose'); 

const cartModel = new mongoose.Schema({
    cartId:{
        type: Number,
        required: true,
        unique: true
    },
    damaged:{
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = mongoose.model('cartModel', cartModel);