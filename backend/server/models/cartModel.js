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
        // not required, since default is already false
    }
});

module.exports = mongoose.model('cartModel', cartModel);