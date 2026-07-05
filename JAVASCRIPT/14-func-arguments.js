// ======================
// FUNCTIONS AS ARGUMENTS
// ====================== 

function callTwice(func){
    func();
    func();
}

function app(){
    console.log('hello');
}

callTwice(app) 

// this will print hello two times 


 function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)
  
// this will run the rollDie function two times.