import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username cannot be empty"]
    },
    password:{
        type:String,
        required:[true,"password cannot be empty"]
    }
})

const User= mongoose.model('User',userSchema);

export default User;