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
reservationRouter.post("/addReservation/:cartId/:uid", addReservation);
reservationRouter.delete("/removeReservation/:cartId", removeReservation);

// Protected: safe to use
reservationRouter.put("/reserveCart/:name/:uid", reserveCart);
reservationRouter.put("/returnCart/:name/:cartId", returnCart);
reservationRouter.get("/getAll", getAll);

module.exports = reservationRouter;