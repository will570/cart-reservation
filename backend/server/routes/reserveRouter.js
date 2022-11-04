const express = require('express');

const {
    addReservation,
    removeReservation,
    reserveCart,
    returnCart,
    getAll
} = require('../controllers/reserveController');

const reservationRouter = express();

// Unprotected: modifying the content may cause inconsistency
reservationRouter.post("/addReservation/:cartId/:uid", addReservation);     // Create a reservation with given cartId and uid from req.params
reservationRouter.delete("/removeReservation/:cartId", removeReservation);  // remove a reservation with given cartId

// Protected: safe to use
reservationRouter.put("/reserveCart/:name/:uid", reserveCart);              // Get a cart from the building with given name, create a reservation with that cartId and uid, and remove that cartId from the building
reservationRouter.put("/returnCart/:name/:cartId", returnCart);             // Get the cart from the reservation, add the cartId to the building with given name, and delete that reservation 
reservationRouter.get("/getAll", getAll);                                   // Get all reservations

module.exports = reservationRouter;