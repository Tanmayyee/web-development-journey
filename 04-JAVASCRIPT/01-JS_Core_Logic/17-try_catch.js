function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } 
    
    catch (e) {                 // (e) is used because 'e' stores the complete details of the error (like the message and line number)
        console.log("Please pass a string next time!");

        console.log(e);             // this will print the complete details of the error (like the message and line number)
    }
    console.log("It still works!");  // this will print with or without error because it is outside the try-catch block. it will always execute.
                      
                                    // but if try and catch block are not used, this line will not execute if there is an error in above code. because the error will stop the execution of the code.
}

/* try and catch are used to handle errors in javascript. try block is used to wrap the code that may throw an error.
catch block is used to handle the error that is thrown in the try block. if there is no error in the try block,
catch block will not be executed. if there is an error in the try block, catch block will be executed and the error
will be passed to the catch block as an argument. we can use this argument to get information about the error. */

