const buildingModel = require('../models/buildingModel');
const cartModel = require('../models/cartModel');
const reservationModel = require('../models/reservationModel');

const addBuilding = async (req, res) => {
    try{
        const {name, carts} = req.body;

        // Make sure no duplicated building name
        const building = await buildingModel.findOne({"name": name});
        if(building){
            return res.status(401).json(`building exist`);
        }
        for(let i = 0; i < carts.length; i++){
            let cart = await cartModel.findOne({"cartId": carts[i]});

            // Make sure the cart exist
            if(!cart){
                return res.status(401).json(`cartId ${carts[i]} does not exist`);
            }
            
            // Make sure the cart is not in any building
            const buildings = await buildingModel.find();
            for(let j = 0; j < buildings.length; j++){
                let exist = buildings[j].carts.includes(carts[i]);
                if(exist){
                    return res.status(401).json(`cartId ${carts[i]} exist in ${buildings[j].name}`);
                }
            }

            // Make sure the cart is not reserved
            const reservation = await reservationModel.findOne({"cartId": carts[i]});
            if(reservation){
                return res.status(401).json(`cartId ${carts[i]} is reserved`);
            }
        }

        // Save building
        const newBuilding = new buildingModel(req.body);
        const savedBuilding = await newBuilding.save();
        return res.status(200).json("building added");
    } catch (err) {
        return res.status(401).json(err);
    }
};

const addCart = async (req, res) => {
    try{
        const {name, cartId} = req.params;
        const building = await buildingModel.findOne({"name": name});
        const cart = await cartModel.findOne({"cartId": cartId});

        // Make sure the cartId and building name exist
        if(building && cart){
            // Add cart
            const updateBuilding = await buildingModel.findOneAndUpdate(
                {"name": name},
                {$push: {"carts": cartId}},
                {new: true}
            )
            return res.status(200).json("cart added");
        }
        else if(!building){
            return res.status(404).json("building does not exist");
        }
        else if(!cart){
            return res.status(404).json("cart does not exist");
        }
    } catch (err){
        return res.status(401).json(err);
    }
};

const removeCart = async (req, res) => {
    try{
        const {name, cartId} = req.params;

        // Make sure building name is valid
        const building = await buildingModel.findOne({"name": name});
        if(!building){
            return res.status(401).json("building does not exist");
        }

        // Make sure the cart is in the building
        const cart = await building.carts.includes(cartId);
        if(!cart){
            return res.status(404).json("cart does not exist");
        }

        // Remove cart
        const updateBuilding = await buildingModel.findOneAndUpdate(
            {"name": name},
            {$pull: {"carts": cartId}},
            {new: true}
        )
        return res.status(200).json("cart removed");
    } catch (err){
        return res.status(401).json(err);
    }
}

const getCart = async (req, res) => {
    try{
        const {name} = req.params;
        // Make sure building name is valid
        const building = await buildingModel.findOne({"name": name});
        if(!building){
            return res.status(404).json(`building does not exist`);
        }

        // Return the first undamaged cart in the building
        for(let i = 0; i < building.carts.length; i++){
            const cart = await cartModel.findOne({"cartId": building.carts[i]});
            if(!cart.damaged){
                return res.status(200).json(cart);
            }
        }
        return res.status(200).json(`no cart available`);
    } catch (err){
        return res.status(401).json(err);
    }
}

const getNum = async (req, res) => {
    try{
        const {name} = req.params;
        // Make sure building name is valid
        const building = await buildingModel.findOne({"name": name});
        if(!building){
            return res.status(404).json(`building does not exist`);
        }

        // Count the number of undamaged cart
        let count = 0;
        for(let i = 0; i < building.carts.length; i++){
            const cart = await cartModel.findOne({"cartId": building.carts[i]});
            if(!cart.damaged){
                count++;
            }
        }
        return res.status(200).json(count);
    } catch (err){
        return res.status(401).json(err);
    }
}

const getAll = async (req, res) => {
    try{
        const buildings = await buildingModel.find();
        return res.status(200).json(buildings);
    } catch (err) {
        return res.status(401).json(err);
    }
}
module.exports = {
    addBuilding,
    addCart,
    removeCart,
    getCart,
    getNum,
    getAll
}