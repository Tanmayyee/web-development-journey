import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/middleware";

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

//################################################### mongoose middleware ###################################################

nameSchema.pre('save',async function(){                      
    this.first= this.first.toUpperCase();
    this.second= this.second.toUpperCase();
    console.log("pre save middleware called")
})

nameSchema.post('save',async function(){
    console.log("post save middleware called")
})

const Naming= mongoose.model("Naming",nameSchema);

const person1= new Naming ({
    first:"tanmay",
    second:"johri"
})


await person1.save()   //pre and post middleware will be called automatically when we save the document
console.log(person1.first)
//TANMAY
console.log(person1.second)
//JOHRI

/**
 * ============================================================================
 *                       MONGOOSE MIDDLEWARE (HOOKS)
 * ============================================================================
 * 
 * 1. TIMING HOOKS (When the function runs)
 * ----------------------------------------------------------------------------
 *    -> pre()  : Executes BEFORE the event. Useful for hashing passwords, 
 *                updating timestamps, or cascading deletions.
 *    -> post() : Executes AFTER the event. Useful for logging, sending emails, 
 *                or handling errors.
 * 
 * 
 * 2. TYPES & SUPPORTED EVENTS (What 'this' refers to)
 * ----------------------------------------------------------------------------
 * 
 *    A) DOCUMENT MIDDLEWARE
 *       - 'this' refers to the specific DOCUMENT instance.
 *       - Supported Events: 
 *         * 'init' (synchronous)
 *         * 'validate'
 *         * 'save'
 *         * 'updateOne'
 *         * 'deleteOne'
 * 
 *    B) QUERY MIDDLEWARE
 *       - 'this' refers to the QUERY object (not the document).
 *       - Supported Events:
 *         * 'countDocuments'
 *         * 'deleteMany'
 *         * 'deleteOne'
 *         * 'distinct'
 *         * 'estimatedDocumentCount'
 *         * 'find'
 *         * 'findOne'
 *         * 'findOneAndDelete'
 *         * 'findOneAndReplace'
 *         * 'findOneAndUpdate'
 *         * 'replaceOne'
 *         * 'updateMany'
 *         * 'updateOne'
 *         * 'validate'
 * 
 *    C) MODEL MIDDLEWARE
 *       - 'this' refers to the MODEL class itself.
 *       - Supported Events:
 *         * 'bulkWrite'
 *         * 'createCollection'
 *         * 'insertMany'
 * 
 *    D) AGGREGATE MIDDLEWARE
 *       - 'this' refers to the AGGREGATION object.
 *       - Supported Events:
 *         * 'aggregate'
 * 
 * 
 * 3. CRITICAL OVERLAPS (Document vs. Query)
 * ----------------------------------------------------------------------------
 *    - The events 'updateOne', 'deleteOne', and 'validate' exist in BOTH 
 *      Document and Query middleware.
 * 
 *    - DEFAULT BEHAVIOR: 
 *      schema.pre('updateOne') hooks into the QUERY middleware by default.
 * 
 *    - HOW TO OVERRIDE: 
 *      To hook into the Document middleware instead, pass the options object:
 *      schema.pre('updateOne', { document: true, query: false }, function() {
 *          // 'this' is now the document
 *      });
 * 
 * ============================================================================
 */

// Mongoose Workflow ->

// 1. Import Mongoose
// 2. Connect to MongoDB
// 3. Create Schema
// 4. Add Schema Types, Validation Rules & Options
// 5. Add Virtuals (get/set)
// 6. Add Instance Methods
// 7. Add Static Methods
// 8. Add Middleware (pre/post hooks)
// 9. Create Model
// 10. Create Document / Instance
// 11. Save Document
// 12. Query / Read Documents
// 13. Update Documents
// 14. Delete Documents