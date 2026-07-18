const math = require('./01-math_module_export')   // Imports all the math functions and constants from the module file


console.log(math.multiplication(4,5));

console.log(math.add(5,10));


// or --------------

const {pi,square}=require('./01-math_module_export')

console.log(square(6))


//// =========================================================================
// 📂 NODE.JS: HOW TO REQUIRE A WHOLE DIRECTORY AS AN ARRAY
// =========================================================================
//
// 📌 DIRECTORY STRUCTURE:
// ├── app.js               <-- Outside file jahan use karenge
// └── math_tasks/          <-- Main Folder
//     ├── basic.js         <-- Module 1
//     ├── advanced.js      <-- Module 2
//     └── index.js         <-- Magic File (Node.js isko auto-select karta hai)
//
// =========================================================================
// 🛠️ STEP 1: INDIVIDUAL MODULE FILES
// =========================================================================
//
// [math_tasks/basic.js] ke andar:
// const add = (a, b) => a + b;
// module.exports = { add };
//
// [math_tasks/advanced.js] ke andar:
// const square = x => x * x;
// module.exports = { square };
//
// =========================================================================
// 🧙‍♂️ STEP 2: THE MAGIC ENTRY POINT (math_tasks/index.js)
// =========================================================================
// Is file mein baaki files ko require karke ARRAY ke roop mein export karenge:
//
// const basicModule = require('./basic');
// const advancedModule = require('./advanced');
//
// module.exports = [basicModule, advancedModule];   //array
//
// =========================================================================
// 🚀 STEP 3: RUNNING IT OUTSIDE THE FOLDER (app.js)
// =========================================================================
// Ab bina kisi file ka naam liye, seedhe poore FOLDER ko require kar lo.
// Node.js background mein automatically index.js ka array utha layega:
//
// const mathModulesArray = require('./math_tasks');
//
// // Array ke indexes use karke functions ko call karna:
// const basic = mathModulesArray[0];
// const advanced = mathModulesArray[1];
//
// console.log(basic.add(10, 5));      // Output: 15
// console.log(advanced.square(4));   // Output: 16
// =========================================================================