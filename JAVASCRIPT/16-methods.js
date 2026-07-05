const myMath = {
    sum: function(x,y){                       // here sum is a method of myMath object , not call it as a function.
        return x+y;
    },
    prodcut: function(x,y){
        return x*y;
    },
    division: function(x,y){
        return x/y;
    }
}


// ============= new method =====================================

const myMathz = {
    sum(x,y) {                                 // here sum is a method of myMathz object , not call it as a function.
        return x+y;
    },
    product(x,y){
        return x*y;
    },
    division(x,y){
        return x/y;
    }
} 


//===================================================================
//  THIS KEYWORD
//===================================================================

// We can access the properties of an object inside a method using the "this" keyword. The "this" keyword refers to the object that is calling the method.

const cat = {
    name: 'blue bird',        //Name is a property of cat object. and 'blue bird' is the value of Name property.
    age: 5,
    callHer(){
        console.log(this.name);            // without "this" keyword we can not access the properties of an object inside a method ( here method is callHer ).
    }
}

cat.callHer()     


// reminder --

const meow=cat.callHer;   // here we are storing the method callHer of cat object in a variable meow. but we are not calling it yet.

meow() /* here we are calling the method callHer of cat object using the variable meow.
  but it will return undefined because we are not calling it from the cat object. so "this" keyword will refer to the
  global object (window in browser) and there is no property "Name" in global object. so it will return undefined. */ 


// GLOBAL OBJECT - WINDOW 

/* in browser, the global object is called window. and in node.js, the global object is called global.
  on javascript, the global object is the top-level object that provides access to global variables and functions.
  it is the parent object of all other objects in javascript. and it is created automatically when a javascript program runs.
  it is the default object that is used when no other object is specified. and it is the object that is used when
   a function is called without an object. 
   
all methods like alert, console.log, etc. are properties of the global object. */