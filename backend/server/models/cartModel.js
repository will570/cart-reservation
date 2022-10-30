import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    cartId:{
        type: String,
        required: true
    },
    building:{
        type: String,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    },
    borrower:{
        type: String,
        default: null,
    }
});

export default mongoose.model("Cart", CartSchema);