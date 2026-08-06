import mongoose from "mongoose";

const MONGO_URI = 'mongodb://127.0.0.1:27017/movieShow';    //uri = uniform resource identifier

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

avengers.save()
  .then(() => console.log('Avengers saved to the database'))
  .catch((error) => console.error('Error saving Avengers:', error))

spiderman.save()
.then(()=> console.log('spiderman saved to the database '))
.catch((e)=> console.error('error',e))

interstellar.save()

inception.save()


// or 

// const saveMovies= async () =>{
//   await avengers.save()
//   await spiderman.save()
//   await interstellar.save()
//   await inception.save()

//   console.log('movie saved successfully.')
// }

// saveMovies()


//###############################################################################################################

//insertMany---------------------------------------------------------------------------------------

//one at a time 
// const anaconda new Movie({title:"anaconda", year:3113 , score:5, rating:"pg-13"})
// anaconda.save()

//multiple documents at once  ,, insertmany() automatically saves the documents to the database.

Movie.insertMany([
  {title: "shit movie",year: 2012,Score: 2.0,rating: "PG-13"},
  {title: "hola hulu",year: 2045,Score: 9.0,rating: "PG-13"},
  {title: "zomboo",year: 2011,Score: 7.0,rating: "PG-16"},
  {title: "zombieland 2",year: 2053,Score: 8.0,rating: "R"},
  console.log('hola hola hola hola')
])


