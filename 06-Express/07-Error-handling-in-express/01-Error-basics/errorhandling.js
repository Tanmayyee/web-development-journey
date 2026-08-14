import express from "express"
const app=express()
import morgan from "morgan"
import AppError from "./appError"

// Morgan is an Express middleware used to log HTTP requests in the terminal.
app.use(morgan("dev")); // "dev" displays a concise, development-friendly request log

// Runs for EVERY incoming request
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);

    // next() passes control to the next middleware/route
    next();
});

// Runs only for requests whose path starts with /dogs
app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!");

    // next() allows the next middleware/route to run
    next();
});

const verifyPassword=(req,res,next)=>{
    const {password}=req.query;
    if(password==='chickennuggets'){
        next()
    }else{
        throw new AppError('password required',401)
        // Creates a custom error with the message and status we provide,
        // so this.message becomes "password required" instead of the default error message.  
    }
}

app.get('/dogs',(req,res)=>{
    res.send("hello woof woof")
})

app.get('/error',(req,res)=>{
    chicken.fly()
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send("my secret is : sometimes I wear headphones")
})

app.get('/admin',(req,res)=>{
    throw new AppError ('not allowed',403)
})

// Error-handling middleware: runs when an error comes from any of the above middleware or routes.
// If no custom message or status is provided, the default values are used.
app.use((err,req,res,next)=>{
    const {message="Something went wrong", status=500}= err;  //default values for message and status 
    res.status(status).send(message)
})

app.listen(4000,()=>{
    console.log("port 4000 !!!")
})