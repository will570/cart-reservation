import mongoose from "mongoose";
const BuildingSchema = new mongoose.Schema({
    name:{

    },
    carts:{
        
    },
    numCarts:{
        type: Number,
    },

});

export default mongoose.model("Building", BuildingSchema);