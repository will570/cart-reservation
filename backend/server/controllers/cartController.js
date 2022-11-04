const cartModel = require ('../models/cartModel');

const addCart = async (req, res) => {
    try{
        const {cartId} = req.body;
        const cart = await cartModel.findOne({"cartId": cartId});

        // Make sure cartId does not exist
        if(cart){
            return res.status(401).json(`cartId exist`);
        }

        // Add cart
        const newCart = new cartModel(req.body);
        const savedCart = await newCart.save();
        return res.status(200).json("cart added");
    } catch (err){
        return res.status(401).json(err);
    }
}

const getCart = async (req, res) => {
    try{
        const {cartId} = req.params;
        const cart = await cartModel.findOne({"cartId": cartId});
        if(cart){
            return res.status(200).json(cart);
        }
        else{
            return res.status(401).json(`cartId does not exist`);
        }
    } catch (err){
        return res.status(401).json(err);
    }
}

const setCart = async (req, res) => {
    try{
        const {cartId} = req.params;
        const cart = await cartModel.findOne({"cartId": cartId});
        if(cart){
            const updateCart = await cartModel.findOneAndUpdate(
                {"cartId": cartId}, 
                {$set: req.body},
                {new: true});
            return res.status(200).json(updateCart);
        }
        else{
            return res.status(401).json(`cartId does not exist`);
        }
    } catch (err){
        res.status(401).json(err);
    }
}

const setDamage = async (req, res) => {
    try{
        const {cartId} = req.params;
        const cart = await cartModel.findOne({"cartId": cartId});
        if(cart){
            // Flip true to false, and false to true
            const updateCart = await cartModel.findOneAndUpdate(
                {"cartId": cartId},
                {$set: {"damaged": !cart.damaged}},
                {new: true}
            )
            return res.status(200).json(updateCart);
        }
        else{
            return res.status(401).json(`cartId does not exist`);
        }
    } catch (err){
        return res.status(401).json(err);
    }
}

const getAll = async (req, res) => {
    try{
        const carts = await cartModel.find();
        return res.status(200).json(carts);
    } catch (err) {
        return res.status(401).json(err);
    }
}
module.exports = {
    addCart,
    getCart,
    setCart,
    setDamage,
    getAll
}