// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// concat() - Merges two or more arrays together into a brand-new array. It doesn't change the original arrays.
const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];
const food = fruits.concat(veggies); 
// food is ["apple", "banana", "carrot", "potato"]


//includes() - Checks if an array contains a certain value. Returns true or false.
const pets = ["cat", "dog", "bird"];
console.log(pets.includes("dog"));  // true
console.log(pets.includes("fish")); // false


//indexOf()
const indexofcolors = ["red", "blue", "green", "blue"];
console.log(indexofcolors.indexOf("blue"));  // 1
console.log(indexofcolors.indexOf("yellow")); // -1


//join() - Creates and returns a new string by concatenating all elements of an array, separated by a specified separator string.
const letters = ["J", "S"];
console.log(letters.join("-")); // "J-S"
console.log(letters.join(""));  // "JS"


//reverse()
const numbers = [1, 2, 3];
numbers.reverse(); 
console.log(numbers); // [3, 2, 1]


//slice() -Extracts a shallow copy of a portion of an array into a new array. " It does not change the original array. "
const animals = ["ant", "bison", "camel", "duck"];
const result = animals.slice(1, 3); //new array is created to store the slice version of animals array
// result is ["bison", "camel"]


//splice() - Changes the contents of an array by removing, replacing, or adding elements in place (permanently changes the original array).
const months = ["Jan", "March", "April"];
// At index 1, delete 0 elements, and insert "Feb"
months.splice(1, 0, "Feb"); 
console.log(months); // ["Jan", "Feb", "March", "April"]


//sort() - By default, it sorts elements as strings alphabetically, which can cause weird results with numbers (e.g., 10 comes before 2). For numbers, you need a comparison function.
const sortletters = ["d", "a", "c", "b"];
sortletters.sort();
console.log(sortletters); // ["a", "b", "c", "d"]

// To sort numbers correctly:
const scores = [40, 100, 1];
scores.sort((a, b) => a - b); 
console.log(scores); // [1, 40, 100]






