import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    uid:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    currentCartId:{
        type: String,
        default: null
    }
});

export default mongoose.model("User", UserSchema);