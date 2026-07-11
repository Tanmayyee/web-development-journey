//mouse event =

const mouse=document.querySelector('button')

mouse.addEventListener('click',function(e){
    console.log(e)
})


//keyboard event =

const kb=document.querySelector('input')

kb.addEventListener('keydown',function(e){          //keydown = key press  ,, keyup = key release
    // console.log(e)
    console.log(e.key)                           // example :  q , a , shift        
    console.log(e.code)                          // exmaple :  Key Q , Key A , ShiftLeft
})



//to apply keyboard event to whole window or page ( for game or some other thing ) :

// window.addEventListener('keydown',function(e){
//   console.log(e.code)
//  })


//only show up right down left key :

//window.addEventListener('keydown',function(e){
//switch(e.code){
//     case 'ArrowUp' : console.log('UP!!!');
//     break;
//     case 'ArrowDown' : console.log('DOWN!!!');
//     break;
//     case 'ArrowRight' : console.log('RIGHT!!!');
//     break;
//     case 'ArrowLeft' : console.log('LEFT!!!');
//     break;
//    }
// })