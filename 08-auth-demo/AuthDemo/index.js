import express from 'express';
const app=express();
import path from 'path'
import bcrypt from 'bcrypt'
import User from './models/user.js';
import mongoose from 'mongoose';
import session from 'express-session'

const MONGO_URI = "mongodb://127.0.0.1:27017/LoginDemo";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Stops the server if the database fails to connect.
  }
};
await connectDB();


app.set('view engine','ejs');
app.set('views', path.join(import.meta.dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(session({secret:"notagoodsecret"}))

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    }else{
        next();
    }
}

app.get('/',(req,res)=>{
    res.send("home page!")
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async(req,res)=>{
    // res.send(req.body)
    const {username,pw}=req.body
    
    // res.send(hash)
    const user= new User({
        username,
        password:pw
    })
    await user.save();
    req.session.user_id=user._id;
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    const{username , pw }=req.body;
    const foundUser= await User.findAndValidate(username,pw)   //check userSchema
    if(foundUser){
        req.session.user_id=foundUser._id;
        res.send('yayy welcome !!!')
    }else{
        res.send('try again')
    }
})

app.post('/logout',(req,res)=>{
    // req.session.user_id = null; // Remove the user ID from the session
    req.session.destroy();       // Destroy the entire session
    res.redirect('/login')
})

app.get('/secret',requireLogin,(req,res)=>{
        res.render('logout')
})

app.listen(3000,()=>{
    console.log('Port 3000 !');
})
