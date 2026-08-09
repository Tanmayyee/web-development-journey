import express from "express";
const app=express()
import path from "path"
import mongoose from "mongoose";
import Product from "./models/product.js";
import methodOverride from "method-override"  //Method-override lets HTML forms use HTTP methods like PUT, PATCH, and DELETE that they don't natively support.,without this we can only use post and get.

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
app.use(express.urlencoded({ extended: true }))              //to make req.body works
app.use(methodOverride("_method"));                     //method override - to use put/patch/delete 

// app.get('/products',async(req,res)=>{               //for testing the connection with database and fetching all products
//     const products = await Product.find({})
//     console.log(products)
//     res.send('All products will be here')
// })

const categories=['fruit','vegetable','dairy','mushroom']

app.get('/products',async(req,res)=>{               //for testing the connection with database and fetching all products
    const products = await Product.find({})
    res.render('products/index',{products})
})

app.get('/products/new',(req,res)=>{
  res.render('products/new',{categories})
})

app.post('/products',async(req,res)=>{
  // console.log(req.body)
  const newProduct= new Product(req.body)            //form gives req.body //app.use(express.urlencoded({ extended: true })) add this 
  await newProduct.save()
  res.redirect(`/products/${newProduct._id}`)
})


app.get('/products/:id', async(req,res)=>{
    const {id}=req.params
    const products = await Product.findById(id)
    res.render('products/show',{products,categories})
})

app.get('/products/:id/edit', async(req,res)=>{
  const {id} =req.params
  const products = await Product.findById(id)
  res.render('products/edit',{products,categories})
})

app.put('/products/:id',async(req,res)=>{
  const {id} =req.params
  const products= await Product.findByIdAndUpdate(id,req.body,{runValidators:true , returnDocument:"after"})
  res.redirect(`/products/${products._id}`)
})

app.delete('/products/:id',async(req,res)=>{
  const {id} =req.params
  const deletedProduct= await Product.findByIdAndDelete(id)
  res.redirect('/products')
})

app.listen(2300,()=>{
    console.log("Listening on Port 2300!")
})