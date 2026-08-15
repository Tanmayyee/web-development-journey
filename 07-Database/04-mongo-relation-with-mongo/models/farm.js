import mongoose, { mongo } from "mongoose";
import Product from "./product";

const farmSchema= new mongoose.Schema({
    name:String,
    city:String,
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Product
    }]
})

const Farm=mongoose.model('Farm',farmSchema)

export default Farm;