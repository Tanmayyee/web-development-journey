//====================================================================================================
//====================================== Default params ==============================================
//====================================================================================================

// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE:
// function rolldie(numSides){
//     if(numSides===undefined){
//         numSides=6;
//     }
//     return Math.floor(Math.random()*numSides)+1
// }

//new method:
function rolldie(numSides = 6){
    return Math.floor(Math.random()*numSides)+1
}

function call(person,age,role='N/A'){                                  
    console.log(`name:${person}, age:${age}, role:${role}`)
}


//====================================================================================================
//========================================== spread ==================================================
//====================================================================================================


// SPREAD IN FUNCTIONS:
const num=[1,2,3,4,5,6,7,8,9];

Math.max(num)  //NaN

Math.max(...num) // 9              //(...spread)

//SPREAD IN ARRAYS:
const cats=['Blue', 'Scout', 'Rocket'];
const dogs=['Tommy','Castiel','Rusty'];

// const animals=cats.concat(dogs);

const animals=[...cats,...dogs];          // join cats and dogs arrays


//SPREAD IN OBJECTS:
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog={...feline,...canine}       //family of canine will overwrite family of feline because it comes later in the spread

const catDog2={...canine,...feline,family: 'Carnivora'}  //we can overwrite or add any property by adding it after the spread


//-----------
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }  //adding new properties to the object using spread operator



//====================================================================================================
//========================================== Rest ====================================================
//====================================================================================================

//rest params: collect all remaining arguments into an actual array
function sum(...num){                              //rest use inside function params to collect all remaining arguments into an actual array
                                                   // rest parameters must be the last named parameter in the function definition
    return num.reduce((total,el)=>{
        total=total+el
    })
}


const raceResults=(gold,silver, ...remaining)=>  {
    console.log(`${gold}:winner - GOLD`)
    console.log(`${silver}:2nd finish - SILVER`)
    console.log(`Thank you for participation: ${remaining}`)
}

raceResults('JECEN','crowley','castiel','sam','dean');



// ------------------------------------------------------

// PARAMETER (in Definition): The placeholder variable names used when creating a function.
//function greet(username) { /* ... */ }

// ARGUMENT (in Call): The actual real values passed into the function when executing it.
//greet("Rahul");

//// REST (in Parameters): Packs multiple individual arguments into a single Array.
//function sum(...args) { /* ... */ }

// SPREAD (in Arguments): Unpacks a single Array into multiple individual arguments.
//sum(...myArray);



//====================================================================================================
//========================================== Destructuring ===========================================
//====================================================================================================
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [goldd, silverr, bronzee, ...remainingg] = scores;               //ARRAY DESTRUCTING  +  REST 


// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;  //variable name must match the property name in the object in case of object destructing only , in array we can give any name to variable

const{deathYear=2015,born:birthYear,bio:biooo='N/A'}=user2;  // default value can be assigned to a variable in case the property is not present in the object, also we can rename the property while destructuring using colon(:) operator



// =================================
// PARAM DESTRUCTURING
// =================================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})