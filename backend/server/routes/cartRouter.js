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

cartRouter.post('/addCart', addCart);           // Add a cart with given cartId and damaged in req.body
cartRouter.get('/getCart/:cartId', getCart);    // Get a cart with given cartId in req.params
cartRouter.put('/setCart/:cartId', setCart);    // Set a cart with given cartId in req.params to cartId and damaged in req.body
// More efficient method
cartRouter.put('/setDamage/:cartId', setDamage);// Set a cart's damaged attribute to the opposite with given cartId
cartRouter.get('/getAll', getAll);              // Get all carts' information

module.exports = cartRouter;