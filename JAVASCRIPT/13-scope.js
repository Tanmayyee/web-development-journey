// ==============
// FUNCTION SCOPE 
// ==============

let totalEggs=0;
function collectEggs() {

    totalEggs=5;

}
function removeEggs()
{
    totalEggs=2;
}
console.log(totalEggs); 
collectEggs()
console.log(totalEggs);
removeEggs()
console.log(totalEggs);
collectEggs()
console.log(totalEggs);

// 2
// 5
// 2
// 5

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
console.log(bird)
birdWatch()
console.log(bird)

//Scarlet Macaw
//Great Blue Heron
//Scarlet Macaw


// ==============
// BLOCK SCOPE
// ==============

let radius = 8;
if (radius > 0) {   // block scope
    const PI = 3.14159;
    let msg = 'HIII!'
}
console.log(radius);
// console.log(msg) // it will give == ERROR == , because msg is not defined outside the block scope , so it will not print anything 

// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery() {
    const heroes=['spiderman','ironman','hulk','thor']
    function villain() {
        const villains=['green goblin','thanos','the leader','loki']
        function fight(){
            for(let i=0;i<heroes.length;i++)
            {
                console.log(`${heroes[i]} v ${villains[i]}`);
            }

        }
        fight()
    }
    villain()

}
bankRobbery()


//===================
//FUNCTION EXPRESSION
//===================

// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}
add(4,6);  // this will return 10 but it will not print anything because we are not using console.log() to print the return value of the function.
           
// return value is used when we want to use the value returned by the function in some other part of the code. For example, we can store the return value in a variable and then use that variable later in the code. or we can use the return value directly in some other function or expression.