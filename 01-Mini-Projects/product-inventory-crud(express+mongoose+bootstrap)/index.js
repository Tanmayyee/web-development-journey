import express from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import Product from "./models/product.js";
import methodOverride from "method-override"; 

// CONNECTION: Define where our MongoDB database lives.
const MONGO_URI = "mongodb://127.0.0.1:27017/mongooseWithExpress";

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


// ==========================================
// MIDDLEWARE & CONFIGURATION SETUP
// ==========================================

// 1. Tell Express where to find our EJS template files.
app.set('views', path.join(import.meta.dirname, '/views'));

// 2. Tell Express we are using EJS to generate dynamic HTML.
app.set('view engine', 'ejs');

// 3. Form Parsing: Without this, Express ignores data sent via HTML forms. 
// This makes the form data available inside `req.body`.
app.use(express.urlencoded({ extended: true }));              

// 4. Method Override: HTML forms natively only support GET and POST. 
// This allows us to append `?_method=PUT` or `?_method=DELETE` to our form actions.  ( put / patch / delete )
app.use(methodOverride("_method"));                     

// We pass this array to our forms so we don't have to hardcode the dropdown options.
const categories = ['fruit', 'vegetable', 'dairy', 'mushroom'];


// ==========================================
// ROUTES (CRUD LOGIC)
// ==========================================

// READ ALL (or filter by category)
app.get('/products', async (req, res) => {               
    // req.query captures anything in the URL after a '?'. 
    // Example: /products?category=fruit -> req.query.category will be "fruit".
    const { category } = req.query;                   
                                                  
    if (category) {
        // If a category was clicked, find only products matching that category.
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        // If no category in URL, fetch absolutely everything.
        const products = await Product.find({});
        res.render('products/index', { products, category: "All" });
    }                                              
});


// CREATE: Show Form (Must go BEFORE '/products/:id' so Express doesn't think "new" is an ID)
app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
});

// CREATE: Save to Database
app.post('/products', async (req, res) => {
  // Create a new Mongoose document using the parsed form data (req.body).
  const newProduct = new Product(req.body);            
  await newProduct.save(); // Actually saves it to MongoDB.
  res.redirect(`/products/${newProduct._id}`);
});


// READ ONE: Show specific product details
app.get('/products/:id', async (req, res) => {
    // req.params captures variables defined directly in the route path (like :id).
    const { id } = req.params;
    
    // Find that specific product in the database.
    const products = await Product.findById(id);
    res.render('products/show', { products, categories });
});


// UPDATE: Show Edit Form
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  
  // We need to fetch the existing product so we can pre-fill the input fields in the edit form.
  const products = await Product.findById(id);
  res.render('products/edit', { products, categories });
});


// UPDATE: Apply changes to Database
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  
  // findByIdAndUpdate takes (id, dataToUpdate, options).
  const products = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, returnDocument: "after" });

  res.redirect(`/products/${products._id}`);
});


// DELETE: Remove from Database
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  
  // After deleting, send the user back to the main products list.
  res.redirect('/products');
});

// START SERVER
app.listen(2300, () => {
    console.log("Listening on Port 2300!");
});