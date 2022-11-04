//https://github.com/BruinEats/BruinEats/tree/master/backend
const express = require('express');
//actions 
const {
    addCart,
    getCart,
    setCart,
    setDamage,
    getAll
} = require('../controllers/cartController');

const cartRouter = express(); 

// Protected: safe to use
cartRouter.post('/addCart', addCart);
cartRouter.get('/getCart/:cartId', getCart);
cartRouter.put('/setCart/:cartId', setCart);
// More efficient method
cartRouter.put('/setDamage/:cartId', setDamage);
cartRouter.get('/getAll', getAll);

module.exports = cartRouter;