import express from "express";
const app=express()
import path from "path"
import mongoose from "mongoose";

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

app.get('/dog',(req,res)=>{
    res.send('WOOFFF!!!')
})


app.listen(2300,()=>{
    console.log("Listening on Port 2300!")
})