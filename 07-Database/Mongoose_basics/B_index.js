import mongoose from "mongoose";

const MONGO_URI = 'mongodb://127.0.0.1:27017/shopProducts';    //uri = uniform resource identifier

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: true,
        min: 2,
        max: 60000
    },
    onSale: {
        type:Boolean,
        default: false
    },
    category:{
        type:[String] ,           //JavaScript/Mongoose is case-sensitive. String is the Mongoose/JavaScript type, while string is not valid here, because s is lowecased here.
        default: ["cycle"]
    },
    qty: {                       //This defines a nested object inside your product document called qty
        online:{
          type:Number,
          default:0
        },
        inStore:{
          type:Number,
          default:0
        }
    }              
})

// ########################### Mongoose Schema Types & Options & Behavior & Validation Rules  ###########################


// Schema Type ->----------------------------------------------------

// type       -> defines the data type of the field
// type: String or Number or Boolean or Date or [String]  or  [Number] or ..... etc.
// type: mongoose.Schema.Types.ObjectId

// [String]   -> array containing strings
// type: [String]

// [Number]   -> array containing numbers
// type: [Number]

// [Boolean]  -> array containing booleans
// type: [Boolean]

// Validation ->----------------------------------------------------

// required   -> field must be present
// required: true

// min        -> minimum number
// min: 0

// max        -> maximum number
// max: 10

// minlength -> minimum string length
// minlength: 2

// maxlength -> maximum string length
// maxlength: 100

// enum       -> value must be one of these
// enum: ["Action", "Drama", "Comedy"]

// match      -> string must match a regular expression
// match: /^[A-Z]/


// Custom Validator ->----------------------------------------------

// validate  -> custom validation function
// validate: function(value) {
//   return value.length > 2;
// }


// Default & Index Options ->---------------------------------------

// default   -> sets a default value if no value is provided
// default: 0
// default: "Unknown"
// default: Date.now
// default: true


// unique    -> creates a unique index for the field
// unique: true


// String SchemaType Options ->-------------------------------------

// trim      -> removes whitespace from beginning and end of string
// trim: true

// lowercase -> converts string to lowercase
// lowercase: true

// uppercase -> converts string to uppercase
// uppercase: true


// Field Behavior ->------------------------------------------------

// immutable -> field cannot be changed after creation
// immutable: true


// Getters & Setters ->----------------------------------------------

// get       -> modifies/transforms a value when it is retrieved
// get: value => ...

// set       -> modifies/transforms a value before it is stored
// set: value => ...


// Query / Projection Options ->------------------------------------

// select    -> controls whether a field is included/excluded by default
// select: false


// Field Alias ->---------------------------------------------------

// alias     -> gives another name to a field when using the Mongoose document
// alias: "movieTitle"


// Transform ->-----------------------------------------------------

// transform -> transforms a value when converting a document to JSON/object
// transform: (doc, ret) => {
//   ret.title = ret.title.toUpperCase();
//   return ret;
// }




const Product= mongoose.model('Product',productSchema)

const shoes= new Product({
  name: "Nike Shoes",
  price: 4999,
  onSale: true,                         //default onSale:false 
  category: ["Shoes", "Sports", "Men"]
})

await shoes.save()

console.log("shoes document=")
console.log(shoes)

const laptop = new Product({
  name: "Dell Inspiron 15",
  price: 54999,
  category: ["Laptop", "Electronics", "Computers"]    //if number is added then it will convert into a string.
});

await laptop.save()

console.log("laptop document=")
console.log(laptop)             //onSale will automatically be set to false because of the default value


const sony = new Product({
  name: "Nike Air Max",
  price: 8999,
  onSale: true,
  category: ["Shoes", "Sports", "Running"],
  qty: {
    online: 25,
    inStore: 10
  }
});

await sony.save()

console.log("sony document=")
console.log(sony)