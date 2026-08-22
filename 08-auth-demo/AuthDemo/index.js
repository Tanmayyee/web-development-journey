import express from 'express';
const app=express();
import path from 'path'
import bcrypt from 'bcrypt'
import User from './models/user.js';
import mongoose from 'mongoose';

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

app.get('/',(req,res)=>{
    res.send("home page!")
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async(req,res)=>{
    // res.send(req.body)
    const {username,pw}=req.body
    const hash= await bcrypt.hash(pw,12)
    // res.send(hash)
    const user= new User({
        username,
        password:hash
    })
    await user.save();
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    const{username , pw }=req.body;
    const user = await User.findOne({username});
    const validPassword= await bcrypt.compare(pw, user.password)
    if(validPassword){
        res.send('yayy welcome !!!')
    }else{
        res.send('try again')
    }
})

app.get('/secret',(req,res)=>{
    res.send("This is secret!!!")
})

app.listen(3000,()=>{
    console.log('Port 3000 !');
})
