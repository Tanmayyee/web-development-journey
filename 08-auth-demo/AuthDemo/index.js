import express from 'express';
const app=express();
import path from 'path'
import User from './models/user.js';
import mongoose from 'mongoose';


app.set('view engine','ejs');
app.set('views', path.join(import.meta.dirname,"/views"));

app.use(express.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',(req,res)=>{
    res.send(req.body)
})

app.get('/secret',(req,res)=>{
    res.send("This is secret!!!")
})

app.listen(3000,()=>{
    console.log('Port 3000 !');
})
