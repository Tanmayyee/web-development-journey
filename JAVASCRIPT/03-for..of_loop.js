const num=[1,2,3,4,5,6,7,8,9,10];

// normal for loop 

for(let i=0; i<num.length; i++)
{
    let square=num[i];
    console.log(square*square);
}

// for...of  loop   

for(let square2 of num)
{
    console.log(square2*square2);
}
   

/* syntax =  
 
  for (variable of iterable) {
  // code block to be executed } 

 */ 