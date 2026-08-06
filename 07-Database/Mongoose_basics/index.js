import mongoose from "mongoose";

const MONGO_URI = 'mongodb://127.0.0.1:27017/movies';    //uri = uniform resource identifier

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


//mongoose workflow :
// 1.)  design the schema first.
// 2.)  create the model based on schema. 
// 3.)  Create an instance (document).
// 4.)  Save the instance to the database.


//1.) ------ 

const movieSchema= new mongoose.Schema({                                    
  title: String,
  year: Number,
  Score: Number,
  rating: String                      
})


//permitted schemaTypes are : 
// String
// Number
// Boolean | Bool
// Array
// Buffer
// Date
// ObjectId | Oid
// Mixed
// UUID
// BigInt
// Double
// Int32


// 2.) ------

const Movie =mongoose.model('Movie',movieSchema)            //first Movie -> model class / model variable , It's a normal JavaScript variable that stores the Mongoose model.We use it in your code, think of it as a class.  

//second Movie -> model name  , Mongoose uses this internally. From this name, Mongoose automatically creates the MongoDB collection name. Converts it to the "movies" ( plural and lowercased )
// , so that documents are stored in "movies" collection.


// 3.) -------

const avengers = new Movie({
  title: "The Avengers",
  year: 2012,
  Score: 8.0,
  rating: "PG-13"
});

const spiderman = new Movie({
  title: "Spider-Man: No Way Home",
  year: 2021,
  Score: 8.2,
  rating: "PG-13"
});

const interstellar = new Movie({
  title: "Interstellar",
  year: 2014,
  Score: 8.7,
  rating: "PG-13"
});

const inception = new Movie({
  title: "Inception",
  year: 2010,
  Score: 8.8,
  rating: "PG-13"
});


// 4.) -------

