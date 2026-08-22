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

//schema static method - to add new custom method 
userSchema.statics.findAndValidate= async function (username,password) {
    const user = await User.findOne({username});
    if (!user) return false;
    const validPassword= await bcrypt.compare(password, user.password)
    return validPassword? user:false;
}

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 12);
});

const User= mongoose.model('User',userSchema);

export default User;