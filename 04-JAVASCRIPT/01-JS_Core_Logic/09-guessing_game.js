let maximum= parseInt(prompt('Enter the maximum number!'));   //parseInt is used to convert the string input from prompt to an integer

while (!maximum)
{
     maximum=parseInt(prompt('Enter a valid number'));
}
const targetNum= Math.floor(Math.random()*maximum)+1;
console.log(targetNum);
let attempt=1;

let guess= prompt("Enter your first guess or type 'q' to quit the game");

while(parseInt(guess)!==targetNum)
{
    if(guess==='q') break;

    guess=parseInt(guess);
    
    
    if(guess>targetNum)
    {
        guess=prompt('Too high !!! Guess again');
        attempt++;
    }
    else if (guess<targetNum)
    {
        guess=prompt('Too low !!! Guess again');
        attempt++;
    }      
    else
    {
       guess=prompt("Invalid input . please enter a valid number or 'q' to quit the game");

    } 
}

if(guess==='q')
{
    console.log('YOU QUIT !!!')
}
else
{
console.log(`you got it !!! and it tooks you ${attempt} attempts`);
}