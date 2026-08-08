// ============================================================
// 1. IMPORT MONGOOSE
// ============================================================

import mongoose from "mongoose";


// ============================================================
// 2. CONNECT TO MONGODB
// ============================================================

const MONGO_URI = "mongodb://127.0.0.1:27017/allProduct";

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


// ============================================================
// 3. CREATE SCHEMA
// ============================================================

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },

  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive ya dodo!"]
  },

  onSale: {
    type: Boolean,
    default: false
  },

  categories: [String],

  qty: {
    online: {
      type: Number,
      default: 0
    },

    inStore: {
      type: Number,
      default: 0
    }
  },

  size: {
    type: String,
    default: "N/A"
  }
});


// ============================================================
// 4. ADD INSTANCE METHODS ( custom methods )
//    -> Methods available on individual documents
// ============================================================

productSchema.methods.toggleOnSale = function () {    // Instance Methods -> Use regular function, NOT arrow function, because `this` must refer to the current document
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};


// ============================================================
// 5. ADD STATIC METHODS
//    -> Methods available on the Model itself
// ============================================================

productSchema.statics.fireSale = function () {
  return this.updateMany({},{ $set: { onSale: true, price: 0 } } );   //{} = all documents. ( dont filter any document , select all)
};


// ============================================================
// 6. CREATE MODEL
// ============================================================

const Product = mongoose.model("Product", productSchema);


// ============================================================
// 7. CREATE DOCUMENT
// ============================================================

const mountainBike1 = new Product({
  name: "Mountain Bike",
  price: 25000,
  onSale: false,
  categories: ["Sports", "Bikes", "Outdoor"],
  qty: {
    online: 12,
    inStore: 5
  }
});


// ============================================================
// 8. SAVE DOCUMENT TO DATABASE
// ============================================================

await mountainBike1.save();


// ============================================================
// 9. CREATE ANOTHER DOCUMENT
// ============================================================

const mountainBike2 = new Product({
  name: "Mountain Bike Pro",
  price: 45000,
  onSale: true,
  categories: ["Sports", "Bikes", "Outdoor"],
  qty: {
    online: 7,
    inStore: 3
  }
});

await mountainBike2.save();


// ============================================================
// 10. CREATE ANOTHER DOCUMENT
// ============================================================

const jersey = new Product({
  name: "Cycling Jersey",
  price: 28.50,
  categories: ["Cycling"],
  size: "XS"
});

await jersey.save();


// ============================================================
// 11. FIND DOCUMENT
// ============================================================

const findProduct = async () => {

  const foundProduct = await Product.findOne({
    name: "Mountain Bike"
  });

  console.log("foundProduct =");
  console.log(foundProduct);


  // ==========================================================
  // 12. CALL INSTANCE METHOD
  //     -> toggleOnSale()
  // ==========================================================

  await foundProduct.toggleOnSale();

  console.log("after toggle =");
  console.log(foundProduct);


  // ==========================================================
  // 13. CALL ANOTHER INSTANCE METHOD
  //     -> addCategory()
  // ==========================================================

  await foundProduct.addCategory("Outdoors");

  console.log("after addCategory =");
  console.log(foundProduct);
};


// ============================================================
// 14. CALL THE FUNCTION
// ============================================================

await findProduct();


// ============================================================
// STATIC METHOD EXAMPLE
// -> Product.fireSale() affects ALL products
// ============================================================

console.log("static method result =")
// await Product.fireSale()  
// console.log(Product)     , this will not show any result because Product is a model not a document or model instance.
//therefore,

const result= await Product.fireSale()
console.log(result)                               //if you want updated document use findOneAndUpdate instead of updateMany