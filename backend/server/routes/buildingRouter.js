const express = require('express');

const {
    addBuilding,
    addCart,
    removeCart,
    getCart,
    getNum,
    getAll,
    prioritizeCart
} = require('../controllers/buildingController');

const buildingRouter = express.Router();

// Unprotected: modifying the content may cause inconsistency
buildingRouter.put('/addCart/:name/:cartId', addCart);      // Add a cartId to a building
buildingRouter.put('/removeCart/:name/:cartId', removeCart);// Remove a cartId from a building

// Protected: safe to use
buildingRouter.post('/addBuilding', addBuilding);           // Create a building with given name and carts in req.body
buildingRouter.get('/getCart/:name', getCart);              // Get the first undamaged cart in carts from building with given name in req.params
buildingRouter.get('/getNum/:name', getNum);                // Get the number of undamaged cart in the building with given name in re.params
buildingRouter.get('/getAll', getAll);                      // Get all buildings' information
buildingRouter.put('/prioritizeCart/:name/:cartId', prioritizeCart);
module.exports = buildingRouter;
    