const user = {
  name: "Rahul",
  sayHi: function() {
    // 'this' refers to the 'user' object here
    console.log(this.name); 
  }
};

user.sayHi(); // Output: Rahul


// Now, let's see how 'this' behaves in an arrow function
const userr = {
  name: "Rahul",
  sayHi: () => {
    // 'this' refers to the surrounding global/window scope, not the 'user' object
    console.log(this.name); 
  }
};

user.sayHi(); // Output: undefined  // in arrow functions, 'this' keyword does not follow the same rules as in regular functions. Instead, it inherits 'this' from the surrounding lexical context. In this case, it refers to the global object (window in browsers), which does not have a 'name' property, hence the output is undefined.