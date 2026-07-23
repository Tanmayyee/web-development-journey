//========================================== setTimeout =======================================

console.log('hellooo....!!!')
setTimeout(() => {
    console.log('byeeeee....')
},3000)                                  //3000ms = 3sec



//========================================== setInterval =======================================

const z=setInterval(() =>{
    console.log('HEY, how are u ')
},2000);

//to stop setInterval we can use clearInterval() method and inside parens we can pass the variable name of setInterval() method which is 'z' in this case.
//clearInterval(z)  //this will stop the setInterval() method from running after 2 sec.