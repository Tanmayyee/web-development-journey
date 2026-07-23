// WHY RETURN FUNCTION IS USED:
// 1. Function Factory: It lets one template function build multiple custom tools.
// 2. Code Reuse: Prevents writing repetitive code for different ranges/scenarios.
// 3. Memory (Closure): The created function permanently remembers the 'min' and 'max' settings.


function makeMysteryFunc() {
    const rand=Math.random();
    if(rand>0.5) {
        return function() {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }

    }
    else {
        return function() {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")  
        }
    }
 }

  // ----------------------------

  function makeBetweenFunc(min,max) {
    return function(num) {
        return num>=min && num<=max;
    }
  }
  makeBetweenFunc(1,10)(5) /* (5) is the argument for the inner function which is returned by the outer function. 
             so it will return true because 5 is between 1 and 10. if we pass 11 as an argument for the inner function 
             then it will return false because 11 is not between 1 and 10. */


/* In programming, symbols like >= (greater than or equal to), <= (less than or equal to), and && (AND) are comparison
 operators. Their entire job is to ask JavaScript a question, and JavaScript can only answer that question in two ways:
  true (Yes) or false (No). */


  //------------- another method to call ----------------
 
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}


const isChild = makeBetweenFunc(1, 10);      // Custom function 1
const isTeenager = makeBetweenFunc(13, 19);  // Custom function 2
const isSenior = makeBetweenFunc(60, 100);   // Custom function 3

console.log(isTeenager(15)); // Output: true
console.log(isSenior(15));   // Output: false
  