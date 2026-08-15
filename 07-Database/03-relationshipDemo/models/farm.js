import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/relationshipDemo";

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


// ONE-TO-MANY RELATIONSHIP

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    productx: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["winter", "fall", "autumn", "summer", "spring"]
    }
});

const Farm = mongoose.model("Farm", farmSchema);
const Product = mongoose.model("Product", productSchema);

// Seed Product data only once.
// Comment this out after the first run to avoid duplicate inserts.

// await Product.insertMany([
//     { name: "Goddess Melon", price: 4.99, season: "summer" },
//     { name: "Sugar Baby Watermelon", price: 4.99, season: "summer" },
//     { name: "Asparagus", price: 3.99, season: "spring" },
//     { name: "Tomato", price: 2.99, season: "summer" },
//     { name: "Pumpkin", price: 5.49, season: "fall" },
//     { name: "Carrot", price: 2.49, season: "winter" },
// ]);


// Create a new Farm with multiple Products

const makeFarm = async (...productNames) => {
    const newFarm = new Farm({
        name: "chickens and eggs farm",
        city: "riverplate"
    });

    const foundProducts = await Product.find({
        name: { $in: productNames }
    });

    if (foundProducts.length === 0) {
        throw new Error("No products found");
    }

    newFarm.productx.push(...foundProducts);

    await newFarm.save();

    return newFarm;
};


// Add multiple Products to an existing Farm

const addProducts = async (farmName, ...productNames) => {
    const foundFarm = await Farm.findOne({
        name: farmName
    });

    if (!foundFarm) {
        throw new Error(`Farm "${farmName}" not found`);
    }

    const foundProducts = await Product.find({
        name: { $in: productNames }
    });

    if (foundProducts.length === 0) {
        throw new Error("No products found");
    }

    foundFarm.productx.push(...foundProducts);

    await foundFarm.save();

    return foundFarm;
};

// Clear all existing farms before creating a new one

await Farm.deleteMany({});           //optinal

// Create Farm with initial Products

const newFarm = await makeFarm(
    "Goddess Melon",
    "Sugar Baby Watermelon"
);

console.log("NEW FARM:");
console.log(newFarm);


// Add more Products to existing Farm

const updatedFarm = await addProducts(
    "chickens and eggs farm",
    "Carrot",
    "Tomato",
    "Pumpkin"
);

console.log("FARM AFTER ADDING PRODUCTS:");
console.log(updatedFarm);


// Populate Product references

const populatedFarm = await Farm
    .findOne({ name: "chickens and eggs farm" })
    .populate("productx");

console.log("FARM AFTER POPULATE:");
console.log(populatedFarm);