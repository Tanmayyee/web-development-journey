// normal method ( includes lots of nesting )---------------


// function changeColor(bgColor,bgDelay,donext){
//     setTimeout(()=>{
//         document.body.style.backgroundColor=bgColor

//     donext && donext()             //this condition check if donext is present then run donext() , and if not then skip it
//                                    // like : if (doNext) {
//                                    //                   doNext();
//                                    //                  } 

//     },bgDelay)
// }


// changeColor('red',1000,()=>{
//     changeColor('yellow',1000,()=>{
//         changeColor('green',1000,()=>{
//             changeColor('blue',1000,()=>{
//                 changeColor('pink',1000)
//             })
//         })
//     })
// })


//using promise --------------------------------------------------------------------

const changeColor= (color,delay) =>{
    return new Promise((yes,no)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            yes()
        },delay)
    })
}


changeColor('red',2000)
.then(()=> changeColor('yellow',2000))
.then(()=> changeColor('green',2000))
.then(()=> changeColor('blue',2000))
.then(()=> changeColor('violet',2000))