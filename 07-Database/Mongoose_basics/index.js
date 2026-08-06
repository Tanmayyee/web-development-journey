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


// --- QUICK RULE FOR AWAIT ---
// TOP-LEVEL AWAIT: You can use 'await' without 'async' ONLY at the root of an ES Module file (outside any function).
// ASYNC FUNCTIONS: If you need to use 'await' INSIDE a function (like an Express route or callback), that function MUST have the 'async' keyword.


// 4.) -------

//older way -------------------------------------         
// avengers.save()
//   .then(() => console.log('Avengers saved to the database'))
//   .catch((error) => console.error('Error saving Avengers:', error))

//modern way ------------------------------------      to catch error in async await , use try and catch 
await avengers.save();
await spiderman.save();
await interstellar.save();
await inception.save();
console.log('All single movies saved successfully.');


//######################################################  insertMany  ##################################################

//one at a time 
// const anaconda new Movie({title:"anaconda", year:3113 , score:5, rating:"pg-13"})
// anaconda.save()

//multiple documents at once  ,, insertmany() automatically saves the documents to the database.

//older way --------------------------------------------
// Movie.insertMany([
//   {title: "shit movie",year: 2012,Score: 2.0,rating: "PG-13"},
//   {title: "hola hulu",year: 2045,Score: 9.0,rating: "PG-13"},
//   {title: "zomboo",year: 2011,Score: 7.0,rating: "PG-16"},
//   {title: "zombieland 2",year: 2053,Score: 8.0,rating: "R"},
// ])
// .then((data)=>{
//   console.log("movies inserted successfully")
//   console.log(data)
// })

//new way ---------------------------------------------
// No .then() needed  because we are using await ->
const insertData = await Movie.insertMany([
  {title: "shit movie", year: 2012, Score: 2.0, rating: "PG-13"},
  {title: "hola hulu", year: 2045, Score: 9.0, rating: "PG-13"},
  {title: "zomboo", year: 2011, Score: 7.0, rating: "PG-16"},
  {title: "zombieland 2", year: 2053, Score: 8.0, rating: "R"},
]);

console.log("movies inserted successfully");
console.log(insertData);



//######################################################  find()  ##################################################

const foundMovies = await Movie.find({ year: 2012, title: "shit movie" });     //node.js command / mongoose    //node index.js only    { .data index.js not work with import mongoose , .data only words with commonJS not with module}
console.log("And the movie found with find() is:");
console.log(foundMovies);

// db.movies.find({year:2012})     //mongosh command


//#################################################### findOne() ###################################################

const rRatedMovie = await Movie.findOne({ rating: "R" });
console.log("The R rated movie found with findOne() is:");
console.log(rRatedMovie);

//db.movies.findOne({rating:"R"})


//#################################################### findById() ###################################################

const findById = await Movie.findById('6a74ce620172250bd57ec83e')            //no Curly braces
console.log("movie found with findById() is :")
console.log(findById)