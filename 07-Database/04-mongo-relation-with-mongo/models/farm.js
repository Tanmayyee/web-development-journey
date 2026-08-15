import mongoose, { mongo } from "mongoose";

const farmSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name required']
    },
    city:{
        type:String,
        required:[true,'City required']
    },
    email:{
        type:String,
        required:[true,'Email required']
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
})

// Bidirectional One-to-Many relationship, between farm and products

const Farm=mongoose.model('Farm',farmSchema)

export default Farm;