// =========================================================================
// 📦 NODE.JS: REQUIRING THIRD-PARTY NPM PACKAGES  
//    step: 1.) go to the folder in which you want to install the packages
//    step: 2.[for local installation]) npm i package-name   (or  npm install package-name)
//    step: 2.[for global installation]) npm i -g package name
// =========================================================================
//
// Importing an external npm package (installed via: npm i give-me-a-joke)
const jokes = require('give-me-a-joke'); 
const colors=require("colors")

// console.dir() prints a list of all hidden methods and functions of the 
// package in a tree-like object structure (best for quick inspection).
// console.dir(jokes); 

// =========================================================================              

jokes.getRandomDadJoke (function(joke) {                 // from npm website  , just set your variable ( jokes. )
      console.log(joke.rainbow);        // .rainbow is a method from colors package and getRandomDadJoke is from give-me-a-joke package.
});

//it should print out a joke with rainbow text in terminal.
