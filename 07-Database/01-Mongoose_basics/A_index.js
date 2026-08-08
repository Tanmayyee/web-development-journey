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

//year , score , rating ... are known as field names or keys or properties of the schema , and also in document.  
// fields are case sensitive. mongo treats year , Year , YEAR completely different.
// The values of these fields are known as field values or values or properties of the schema , and also in document.

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


// #######################################  document methods  ###########################################################

// doc.save()  -> saves the document to the database
// for update delete insert we use CRUD ( create, read, update, delete) operations methods of model class not document methods , because document methods are used to save the document to the database only , not for update or delete.

// #######################################  Mongoose Model Methods / CRUD Operations  ####################################### 

// CREATE
// Model.create()  // we do not use this method , because mongoose automatically creates the document when we create an instance of the model class and save it to the database using doc.save() method.
// Model.insertMany()

// READ
// Model.find()
// Model.findOne()
// Model.findById()

// UPDATE
// Model.updateOne()
// Model.updateMany()
// Model.findOneAndUpdate()

// DELETE
// Model.deleteOne()
// Model.deleteMany()
// Model.findOneAndDelete()

//######################################################  insertMany  ##################################################

//one at a time 
// const anaconda = new Movie({title:"anaconda", year:3113 , score:5, rating:"pg-13"})
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

const foundMovies = await Movie.find({ year: 2012, title: "shit movie" });  //model class name   //node.js command / mongoose    //node index.js only    { .data index.js not work with import mongoose , .data only works with commonJS not with module}
console.log("And the movie found with find() is:");
console.log(foundMovies);

// db.movies.find({year:2012})     //mongosh command   //db.collectionName.find({query})


//#################################################### findOne() ###################################################

const rRatedMovie = await Movie.findOne({ rating: "R" });
console.log("The R rated movie found with findOne() is:");
console.log(rRatedMovie);

//db.movies.findOne({rating:"R"})



//#################################################### findById() ###################################################

const findById = await Movie.findById('6a74ce620172250bd57ec83e')            //no Curly braces
console.log("movie found with findById() is :")
console.log(findById)


//#################################################### operator ###################################################

// $eq -> equal to
// $gt -> greater than
// $gte -> greater than or equal to
// $lt -> less than
// $lte -> less than or equal to
// $ne -> not equal to
// $in -> //matches any value in the array
// $nin -> not in array   //opposite of $in
// $or -> logical OR
// $and -> logical AND
// $not -> logical NOT
// $exists -> field exists or not
// $regex -> regular expression
// $size -> array size
// $all -> all elements in array
// $elemMatch -> match element in array

// $eq ->
const equalToMovies =await Movie.find({score: {$eq:9.0}})
console.log("movies with score equal to 9.0 are :")
console.log(equalToMovies)

//$in ->
const inArrayMovies = await Movie.find({year: {$in:[2012,2045]}})     //this will find all movies with year 2012 or 2045
console.log("movies with year 2012 or 2045 are :")
console.log(inArrayMovies)

//$or ->
const orMovies = await Movie.find({$or: [{year:2012},{year:2045}]})     //this will find all movies with year 2012 or 2045
console.log("movies with year 2012 or 2045 are :")
console.log(orMovies)

const orMovies2 = await Movie.find({$or: [{year: {$gte:2012}},{year:1945}]})     //this will find all movies with year greater than or equal to 2012 or year 1945
console.log("movies with year greater than or equal to 2012 or year 1945 are :")
console.log(orMovies2)


//$exists -> 
const existsMovies = await Movie.find({score: {$exists:true}})  //this will find all movies that have a score field , regardless of its value , even if the value is null or undefined

//if $exists:false -> this will find all movies that do not have a score field



//$regex ->
const regexMovies = await Movie.find({title: {$regex: "z" , $options: "i"}})  //this will find all movies that have a title that contains the letter "z" , case insensitive , means it will match "z" or "Z" , $options: "i" is for case insensitive
console.log("movies with title containing letter 'z' are :")
console.log(regexMovies)


// Movie.find({title:"batman"})      this will find all movies with title "batman" only not "batman begins" , and it is case sensitive , means it will match "batman" only not "Batman" or "BATMAN" .
// Movie.find({title:{$regex:"batman" , $options:"i"}})  this will find all movies with title that contains "batman" , case insensitive , means it will match "batman" or "Batman" or "BATMAN" or "batman begins" or "The Batman" etc.



//############################################  updateOne()  #############################################################

const updateOneMovie = await Movie.updateOne({year:2053},{$set:{Score:10.0}}) //this will update the first movie that matches the query {year:2053} and set its Score to 10.0
console.log("movie with year 2053 updated to have score 10.0 :")
console.log(updateOneMovie)

//############################################ findOneAndUpdate()  #############################################################

const findOneAndUpdateMovie = await Movie.findOneAndUpdate({year:2012},{$set:{Score:9.0}},{new:true}) //this will find the first movie that matches the query {year:2012} and set its Score to 9.0 and return the updated document , {new:true} is to return the updated document
console.log("movie with year 2012 updated to have score 9.0 :")
console.log(findOneAndUpdateMovie)

//
// updateOne()
// -> Updates one matching document
// -> Returns update information like matchedCount and modifiedCount
// -> Does NOT return the updated document
//
// findOneAndUpdate()
// -> Finds one matching document and updates it
// -> Returns the document
// -> By default, returns the document BEFORE the update
// -> Use { new: true } to get the UPDATED document
//

//############################################ updateMany()  #############################################################
 
const updateManyMovies = await Movie.updateMany({year:{$gte:2053}},{$set:{rating:"hahaha"}}) //this will update all movies that have year greater than or equal to 2012 and set their Score to 7.0
console.log("movies with year greater than or equal to 2012 updated to have score 7.0 :")
console.log(updateManyMovies) 


// ============================================= COMMON UPDATE OPERATORS =================================================

// $set is used to set/change the value of a field in an existing MongoDB document, if not used , the entire document will be replaced with the new document provided in the update operation.
// MongoDB's update methods expect update operators like->
// $set, $inc, $push, etc....
// to tell MongoDB what kind of update you want to perform.

// $set
// -> Set/change a field's value
// { $set: { score: 10 } }

// $unset
// -> Remove a field
// { $unset: { score: "" } }

// $inc
// -> Increase/decrease a number
// { $inc: { views: 1 } }
// { $inc: { views: -1 } }

// $mul
// -> Multiply a number
// { $mul: { price: 2 } }

// $min
// -> Update only if new value is smaller
// { $min: { score: 5 } }

// $max
// -> Update only if new value is larger
// { $max: { score: 10 } }

// $rename
// -> Rename a field
// { $rename: { Score: "score" } }

// $currentDate
// -> Set field to current date/time
// { $currentDate: { updatedAt: true } }


// // ==================== ARRAY UPDATE OPERATORS ====================

// $push
// -> Add an item to an array
// { $push: { genres: "Action" } }

// $addToSet
// -> Add item only if it doesn't already exist
// { $addToSet: { genres: "Action" } }

// $pop
// -> Remove first or last item from an array       //important: $pop only accepts 1 or -1, not 2.
// { $pop: { genres: 1 } }    // Remove last
// { $pop: { genres: -1 } }   // Remove first

// $pull
// -> Remove matching items from an array
// { $pull: { genres: "Action" } }

// $pullAll
// -> Remove multiple specified items from an array
// { $pullAll: { genres: ["Action", "Drama"] } }

//example->
// Before:
// {
//   title: "Batman",
//   year: 2022,
//   genres: ["Action", "Drama"]
// }
//
// Update:
// { $push: { genres: "Comedy" } }
//
// After:
// {
//   title: "Batman",
//   year: 2022,
//   genres: ["Action", "Drama", "Comedy"]
// }


//############################################  deleteOne()  #############################################################
const deleteOneMovie= await Movie.deleteOne({year:2045})  //this will delete the first movie that matches the query {year:2045}
console.log("movie with year 2045 deleted :")
console.log(deleteOneMovie)

//############################################  deleteMany()  #############################################################
const deleteManyMovies = await Movie.deleteMany({year:{$gte:2053}})  //this will delete all movies that match the query {year:{$gte:2053}}
console.log("movies with year greater than or equal to 2053 deleted :")
console.log(deleteManyMovies) 

//############################################  findOneAndDelete()  #############################################################
const findOneAndDeleteMovie = await Movie.findOneAndDelete({year: 2045})  //this will find the first movie that matches the query {year: 2045} and delete it
console.log("movie with year 2045 deleted :")
console.log(findOneAndDeleteMovie)



// CREATE
// create()       → document
// insertMany()   → [documents]
// save()         → document

// READ
// find()         → [documents]
// findOne()      → document / null
// findById()     → document / null

// UPDATE
// updateOne()    → matchedCount + modifiedCount
// updateMany()   → matchedCount + modifiedCount
// findOneAndUpdate() → document

// DELETE
// deleteOne()    → deletedCount
// deleteMany()   → deletedCount
// findOneAndDelete() → deleted document