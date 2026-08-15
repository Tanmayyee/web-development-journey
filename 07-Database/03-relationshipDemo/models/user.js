import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/relationshipDemo";

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

// One-to-Few relationship between User and Address.
// One User can have a small number of Addresses (e.g., home, office, college),
// so the addresses are embedded as subdocuments inside the User document.
//User = parent document,  Address = embedded subdocument
const userSchema= new mongoose.Schema({
    first:{
        type:String,
        required:true
    },
    last:{
      type: String,
      required: true
    },
    addresses:[                             
      {
        _id:{_id:false},
        street: String,
        city: String,
        state: String,
        country: String
      }
    ]
})


//model ->

const User= mongoose.model('User',userSchema)

const makeUser= async()=>{
 const u= new User({
     first:'Harry',
     last:'potter'
  })
  u.addresses.push({                //add this addresses to 'u' instance
      street: '123 Sesame St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
  })
  u.addresses.push({
      street: '99 3rd St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
        
  })
  const res=await u.save()
  console.log(res)
}

makeUser()

//another way of adding more addresses ->

// const addAddress = async (id) => {
//     const user = await User.findById(id);
//     user.addresses.push(
//         {
//             street: '99 3rd St.',
//             city: 'New York',
//             state: 'NY',
//             country: 'USA'
//         }
//     )
//     const res = await user.save()
//     console.log(res);
// }

// // addAddress('5f4426235f9f6233f9ed0996');

