
const express = require('express');

const {
    addBuilding,
    addCart,
    removeCart,
    getCart,
    getNum,
    getAll
} = require('../controllers/buildingController');

const buildingRouter = express();

// Unprotected: modifying the content may cause inconsistency
buildingRouter.put('/addCart/:name/:cartId', addCart);
buildingRouter.put('/removeCart/:name/:cartId', removeCart);

// Protected: safe to use
buildingRouter.post('/addBuilding', addBuilding);
buildingRouter.get('/getCart/:name', getCart);
buildingRouter.get('/getNum/:name', getNum);
buildingRouter.get('/getAll', getAll);
module.exports = buildingRouter;
    