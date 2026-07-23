const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

//push -> console.log()
//pop -> console.log()
//output -> BEFORE

//push -> isRightTriangle(3,4,5)
//push -> square(a) + square(b) === square(c)
//push -> square(a) + square(b)
//push -> square(a)
//push -> multiply(x,x)
//push -> x * y                       //gives value for a
//pop -> x * y                      
//pop -> multiply(x,x)
//pop -> square(a)
//push -> square(b)
//push -> multiply(x,x)
//push -> x * y                       //gives value for b
//pop -> x * y 
//pop -> multiply(x,x)
//pop -> square(b)
//push -> square(c)
//push -> multiply(x,x)
//push -> x * y                       //gives value for c
//pop -> x * y 
//pop -> multiply(x,x)
//pop -> square(c)
//pop -> isRightTriangle(3,4,5)          //gives true or false 

//push -> console.log()
//pop -> console.log()
