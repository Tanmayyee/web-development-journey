import express from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import Product from "./models/product.js";
import methodOverride from "method-override"; 
import AppError from "./AppError.js";


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


app.set('views', path.join(import.meta.dirname, '/views'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));              

app.use(methodOverride("_method"));                     

const categories = ['fruit', 'vegetable', 'dairy', 'mushroom'];

app.get('/products', async (req, res) => {               
    const { category } = req.query;                   
                                                  
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: "All" });
    }                                              
});


app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);            
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});


//handling async erros -------------------------------------------------------------------------

// Don't forget to add `next` as a parameter so we can pass async errors
// to the error-handling middleware using `next(error)`.
app.get('/products/:id', async (req, res,next) => {
    const { id } = req.params;
    const products = await Product.findById(id);

    if(!products){
      // In async route handlers, use next(error) to pass the error
        // to the error-handling middleware instead of simply throwing it.
      return next(new AppError('Product not found',404))
    }
    res.render('products/show', { products, categories });
});


app.get('/products/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  
  const products = await Product.findById(id);
  if(!products){
      return next(new AppError('Product not found',404))
    }
  res.render('products/edit', { products, categories });
});


app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  
  const products = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, returnDocument: "after" });

  res.redirect(`/products/${products._id}`);
});


app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  
  res.redirect('/products');
});

app.use((err,req,res,next)=>{
  const {message='default error message',status=500}=err;
  res.status(status).send(message);
})

// START SERVER
app.listen(2300, () => {
    console.log("Listening on Port 2300!");
});