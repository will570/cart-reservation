const reservationModel = require('../models/reservationModel');
const cartModel = require('../models/cartModel');
const userModel = require('../models/userModel');
const buildingModel = require('../models/buildingModel');


const addReservation = async (req, res) => {
    try{
        const {cartId, uid} = req.params;
        const cart = await cartModel.findOne({"cartId": cartId});
        const user = await userModel.findOne({"uid": uid});
        // Make sure both cartId and uid exist
        if(cart && user){
            const newReservation = new reservationModel(
                {"uid": user.uid,
                "cartId": cart.cartId}
            )
            const savedReservation = await newReservation.save();
            return res.status(200).json("reservation added");
        }
        else if(!cart){
            return res.status(404).json("cartId does not exist");
        }
        else if(!user){
            return res.status(404).json("uid does not exist");
        }
    } catch (err) {
        return res.status(401).json(err);
    }
}

const removeReservation = async (req, res) => {
    try{
        const {cartId} = req.params;
        // Make sure reservation exist
        const reservation = await reservationModel.findOne({"cartId": cartId});
        if(reservation){
            const deleteReservation = await reservationModel.deleteOne({"cartId": cartId});
            return res.status(200).json("reservation deleted");
        }
        else{
            return res.status(404).json("reservation does not exist");
        }
    } catch (err){
        return res.status(401).json(err);
    }
}

const reserveCart = async (req, res) => {
    try{
        // Get cart
        const {name, uid} = req.params;
        const building = await buildingModel.findOne({"name": name});
        let cart;
        let founded = false;
        for(let i = 0; i < building.carts.length; i++){
            cart = await cartModel.findOne({"cartId": building.carts[i]});
            if(!cart.damaged){
                founded = true;
                break;
            }
        }
        if(!founded){
            return res.status(200).json(`no cart available`);
        }
        // Add reservation
        const user = await userModel.findOne({"uid": uid});
        if(user){
            const newReservation = new reservationModel(
                {
                    "uid": user.uid,
                    "cartId": cart.cartId
                }
            )
            const savedReservation = await newReservation.save();
        }
        else{
            return res.status(404).json("uid does not exist");
        }
        // Delete cart
        const updateBuilding = await buildingModel.findOneAndUpdate(
            {"name": name},
            {$pull: {"carts": cart.cartId}},
            {new: true}
        )
        return res.status(200).json(cart.cartId);
    } catch (err){
        return res.status(401).json(err);
    }
}

const returnCart = async (req, res) => {
    try{
        // Check if cart exist
        const {name, cartId} = req.params;
        const reservation = await reservationModel.findOne({"cartId": cartId});
        if(!reservation){
            return res.status(404).json("reservation does not exist");
        }
        // Add cart to building
        const building = await buildingModel.findOne({"name": name});
        if(!building){
            return res.status(404).json("building does not exist");
        }
        const updateBuilding = await buildingModel.findOneAndUpdate(
            {"name": name},
            {$push: {"carts": cartId}},
            {new: true}
        )
        // Delete reservation
        const deleteReservation = await reservationModel.deleteOne({"cartId": cartId});
        return res.status(200).json(updateBuilding);
    } catch (err) {
        return res.status(401).json(err);
    }
}

const getAll = async (req, res) => {
    try{
        const reservations = await reservationModel.find();
        return res.status(200).json(reservations);
    } catch (err) {
        return res.status(401).json(err);
    }
}
module.exports = {
    addReservation,
    removeReservation,
    reserveCart,
    returnCart,
    getAll
}