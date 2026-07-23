//callback - setTimeout:

console.log('hello before callback function setTimeout')

setTimeout(()=>{
    console.log('inside setTimeout')
},3000)                                       //3000ms = 3 sec

console.log('After setTimeout')


// ========================================================================================================
// call back hell !!!!!! :

// setTimeout(()=>{
//     document.body.style.backgroundColor='red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor='yellow'
//         setTimeout(()=>{
//             document.body.style.backgroundColor='green'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='blue'
//             },1000)
//         },1000)
//     },1000)
// },1000)

//this include lot of nesting !  


//==========================================================================================================
// lets try this :

function changeColor(bgColor,bgDelay,donext){
    setTimeout(()=>{
        document.body.style.backgroundColor=bgColor

    donext && donext()             //this condition check if donext is present then run donext() , and if not then skip it
                                   // like : if (doNext) {
                                   //                   doNext();
                                   //                  } 

    },bgDelay)
}


changeColor('red',1000,()=>{
    changeColor('yellow',1000,()=>{
        changeColor('green',1000,()=>{
            changeColor('blue',1000,()=>{
                changeColor('pink',1000)
            })
        })
    })
})


//again lots of nesting !!!!

// therefore we use "promise" for this purpose 