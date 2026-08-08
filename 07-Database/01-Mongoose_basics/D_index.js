import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/personName";

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


const nameSchema= new mongoose.Schema({
    first:{
        type:String,
        min:1,
        max:20
    },
    second:{
        type:String,
        min:0,
        max:20
    }
})

//defining getter for virtual property ->          //This property doesn't exist in the database at all , but only on Mongo side of thing in JS
nameSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.second}`
})


const Naming= mongoose.model("Naming",nameSchema);

const person1= new Naming ({
    first:"tanmay",
    second:"johri"
})

console.log(person1.first)
//tanmay
console.log(person1.second)
//johri

console.log("------------------------")

console.log(person1.fullName)
//tanmay johri 


// Virtual -> Creates a property that is NOT stored in the database
//           It is calculated from other existing document properties.

// get -> Runs when the virtual property is accessed



// if we do like  , person1.fullName="harsh singh"   , this will not work 
// we need .set()

nameSchema.virtual("fullName").set(function (value) {
    // set -> Runs when a value is assigned to fullName
    // value = the value being assigned
    const [first, second] = value.split(" ");

    this.first = first;
    this.second = second;
  });


  console.log("------------------------")
  console.log(person1.fullName="harsh singh")  
  //harsh singh



 //or - 
 //   nameSchema.virtual("fullName")
 //   .get(function () {
 //     // get -> Runs when fullName is accessed
 //     return `${this.first} ${this.second}`;
 //   })
 //   .set(function (value) {
 //     // set -> Runs when a value is assigned to fullName
 //     // value = the value being assigned
 //     const [first, second] = value.split(" ");

 //     this.first = first;
 //     this.second = second;
 //   }); 
