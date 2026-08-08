import express from "express";
const app=express()
import path from "path"
import mongoose from "mongoose";
import Product from "./models/product.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/mongooseWithExpress";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

await connectDB();

// console.log("testing npm init")

app.set('views',path.join(import.meta.dirname,'/views'))
app.set('view engine','ejs')

// app.get('/products',async(req,res)=>{               //for testing the connection with database and fetching all products
//     const products = await Product.find({})
//     console.log(products)
//     res.send('All products will be here')
// })

app.get('/products',async(req,res)=>{               //for testing the connection with database and fetching all products
    const products = await Product.find({})
    res.render('products/index',{products})
})

app.get('/products/:id', async(req,res)=>{
    const {id}=req.params
    const products = await Product.findById(id)
    res.render('products/show',{products})
})

app.listen(2300,()=>{
    console.log("Listening on Port 2300!")
})