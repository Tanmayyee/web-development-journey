//==============================================================================================================
// ================================================  forEach  ==================================================
//==============================================================================================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// to find even numbers -

// for(let num of numbers){
//     if(num %2===0 ){
//         console.log(num);
//     }
// }

numbers.forEach(function (num) {
  //forEach not return anything and it can not be stored in a variable or new array , only use for iterating over the array
  if (num % 2 === 0) {
    console.log(num); // use console.log() because returning anything will not work in forEach
  }
});

// another example of forEach -
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

//==============================================================================================================
// ================================================  map  ======================================================
//==============================================================================================================

const numberss = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newNum = numberss.map(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});

// .map() Creates a new array by transforming every element.
// It always returns an array of the same length as the original.
// Use it when you want to modify or transform each element.
// It does NOT remove elements (use filter() for that).

//map() is the wrong method for this task. ,,, because map() must return one value for every element.

// For odd numbers, your function returns nothing, which means it returns undefined.

// output -
// [
//   undefined, 2,
//   undefined, 4,
//   undefined, 6,
//   undefined, 8,
//   undefined, 10,
//   undefined, 12,
//   undefined, 14,
//   undefined, 16,
//   undefined, 18,
//   undefined, 20
// ]

// but for ( num * 2 ) , we can use map

//==============================================================================================================
// =============================================== filter ======================================================
//==============================================================================================================

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterNum = number.filter(function (num) {
  // filter() - Returns a new array containing only the elements that match the condition.
  if (num >= 5) {
    // we can do ( num%2===0) task with filter method
    return num;
  }
});

//==============================================================================================================
// ==============================================  find   ======================================================
//==============================================================================================================

let dixit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findDixit = dixit.find((num) => num > 5); // .find() -> Returns the FIRST matching item itself (or undefined). Stops searching instantly on match.

// output - only 6

let moviess = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

let movie = moviess.find((movie) => {
  return movie.includes("Mrs.");
}); // "Mr. and Mrs. Smith"

//================================================================================================================
// ==============================================  findIndex  ====================================================
//================================================================================================================

let dix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dixs = dix.findIndex((num) => num > 5); //give index of matching element

// Array Selection Guide:
// .find()    -> Returns ONE item (the actual object/value)
// .filter()  -> Returns a NEW ARRAY of all matching items
// .findIndex()-> Returns the INDEX number of the item

//==============================================================================================================
// ==============================================  Some  =======================================================
//==============================================================================================================

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let someDigits = digits.some(function (num) {
  // some and every always return true or false
  // map and filter return new array
  return num > 5;
});

console.log(someDigits); // only print true or false

//==============================================================================================================
// ==============================================  Every  ======================================================
//==============================================================================================================

let digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let everyDigit = digit.every(function (num) {
  // every prints true only when every single digits are greater than 5
  return num > 5;
});

console.log(`every - ${everyDigit}`);

//==============================================================================================================
// ==============================================  Reduce  ======================================================
//==============================================================================================================

// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

//calculate total -
//method 1
// let total = 0;
// for (let price of prices){
//     total+=price
// }
// console.log(total)

//using reduce method-
// const total=prices.reduce((total,price) =>{
//     return total+price
// })

const total = prices.reduce((total, price) => total + price);

//find min price-
const min = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// ---------------- intital value of accumulator -----------------
[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // initial value of accumulator is 4
});
//RETURNS: 30

[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // inital value of accumulator is 100
//RETURNS: 130

//--------------------------------------------------------------------------------------------------
const moviexs = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const highestRated = moviexs.reduce((bestMovie, currMovie) => {
  //reduce iterates through the entire array to find the movie with the maximum score.
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});
