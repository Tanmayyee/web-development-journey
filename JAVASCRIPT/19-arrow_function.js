// function add(x,y){
//     return x+y;
// }

// const add=function(x,y){
//     return x+y;
// }

const add=(x,y) => {            //arrow function 
    return x+y;
}

//further simplification of the above function: ,, implicit return
const sum=(a,b) => (
     a+b                                // Rule: Use ( ) instead of {} to auto-return a value; do not put a semicolon inside it.
) 

// if only one line task or function: 
const summ=(a,b) => a+b;  

//parens are optional if there is only one parameter:
const square= x => x*x;

//use empty parens for functions w/ no parameters:
const singASong= () => 'LA LA LA LA LA LA...';


//------------------------------------------------------------------------------------------------
const movies = [
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

const movie=movies.filter(m => (
    m.score>80
))

const moviels=movies.map(m =>(
    `${m.title}-${m.score}-${m.year}`
))