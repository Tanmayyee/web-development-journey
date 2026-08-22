import mongoose from "mongoose";
import bcrypt from 'bcrypt'

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

userSchema.statics.findAndValidate= async function (username,password) {
    const user = await User.findOne({username});
    const validPassword= await bcrypt.compare(password, user.password)
    return validPassword? user:false;
}

const User= mongoose.model('User',userSchema);

export default User;