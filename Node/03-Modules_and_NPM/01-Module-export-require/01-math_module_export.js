const add = (x,b)=> x+b;

const multi=(x,b)=> x*b;

const square= x=> x*x;

const PI = 3.14;

//1st method (best method ) -----------------------------------------

module.exports = {         // only module.exports  (remember)
    add,                   // ES6 Shorthand (add: add likhne ki zaroorat nahi)
    multiplication: multi, // Alag naam chahiye tha, toh custom key lagayi
    pi: PI,                // Alag naam chahiye tha, toh custom key lagayi
    square                 // ES6 Shorthand
};

//2nd method ------------------------------------------

// module.exports.add=add;
// module.exports.multiplication=multi;
// module.exports.pi=PI;
// module.exports.square=square;

//3rd method ------------------------------------------

// exports.add=add;
// exports.multiplication=multi;
// exports.pi=PI;
// exports.square=square;


//4th method ------------------------------------------

// const math ={
//       add: add,
//       multiplication: multi,
//       pi: PI,
//       square: square,
// }

// exports.mathObject = math;


//5th method ------------------------------------------

// exports.add=(x,b)=>x+b;

// exports.multiplication.multi=(x,b)=> x*b;

// exports.square.square= x=> x*x;
