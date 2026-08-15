import mongoose, { mongo } from "mongoose";

//mongoose connection with mongoose not required here because we are importing this model in index.js where we have already connected to the database

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
    },
    farm:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Farm
    }
})

// Bidirectional One-to-Many relationship, between farm and products

const Product = mongoose.model('Product', productSchema);

export default Product;