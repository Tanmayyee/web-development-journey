// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
//  FOR LOOP
// ======================================

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
} 

// ===================================

// ITERATING OVER ARRAYS!             // iterable means we can loop over it. Arrays and  Strings are iterable.
                                      // non iterable means we cannot loop over it. Numbers and Objects are non iterable.
// ===================================

const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger" ]

    for (let i=0;i<animals.length;i++)
    {
        console.log(animals[i]);
    }

// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

//*************************************************************************************************************

// ====================
// FOR OF LOOP
// ====================

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

 // ------------------------------------------------------

const seatingCharts = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
] 

for (let row of seatingCharts) {
    for (let student of row) {
        console.log(student);
    }
}


//**************************************************************************************************************** 


//================================
//  ITERATING OBJECST 
//================================

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);    //Takes an object (like { math: 90, science: 85, history: 95 }) and grabs only the numbers, turning them into an array: [90, 85, 95].
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)


//**************************************************************************************************************** 


//==========================
//  WHILE LOOPS
//==========================

let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

//--------------------------------------------

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")