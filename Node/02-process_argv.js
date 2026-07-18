// =================================================================
// WHAT IS 'process'?
// 'process' is a global object built directly into Node.js. 
// Think of it as a bridge between your JavaScript code and your computer's operating system.
// Because it is global, you never have to import it—it is always ready to use.
// It gives you information about, and control over, the currently running Node program.
// =================================================================

// 'process.argv' is a built-in array that captures EVERYTHING you typed into the terminal to run this file.
// By default, it always contains:
//   - Index 0: The file path to the Node engine on your computer.
//   - Index 1: The file path to this specific JavaScript file.
const full = process.argv;

// This prints the entire raw array to your terminal. 
// Note: When putting an array inside a template literal (`${full}`), JavaScript automatically 
// joins the items together into a single text string separated by commas.
console.log(`full argv is ${full}`);

//termial = node 02-process-argv.js tanmay hello johri coding 
//output = full argv is C:\Program Files\nodejs\node.exe,C:\Users\tanma\Desktop\Full stack by colt\Node\02-process_argv.js,tanmay,hello,johri,coding


// ---------------------------------------------------------------------------------------------

// '.slice(2)' is a standard array method that tells Node to start at index 2 and cut off everything before it.
// This throws away the system paths (indices 0 and 1) and saves ONLY your custom terminal inputs 
// into a clean, brand-new array variable that you named 'args'.
const args = process.argv.slice(2);

// This 'for...of' loop looks at your clean 'args' array and loops through its items one by one.
// During each loop, the current item is temporarily stored in the variable 'arg'.
for (let arg of args) {
    // This logs your custom greeting for the current 'arg' in the terminal loop.
    console.log(`hello ${arg}, welcome to backend development`);
}

//termial = node 02-process-argv.js tanmay hello johri coding 
//output = hello tanmay, welcome to backend development
// hello hello, welcome to backend development
// hello johri, welcome to backend development
// hello coding, welcome to backend development

//because of .slice(2)