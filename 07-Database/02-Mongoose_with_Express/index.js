import express from "express";
const app=express()
import path from "path"
import mongoose from "mongoose";

// console.log("testing npm init")

app.set('views',path.join(import.meta.dirname,'/views'))
app.set('view engine','ejs')




app.listen(2300,()=>{
    console.log("Listening on Port 2300!")
})