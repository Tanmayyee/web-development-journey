const btn=document.querySelector('button')
const rgbText=document.querySelector('h1')

btn.addEventListener('click',function(){

    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    
    const newColor=`rgb(${r},${g},${b})`

    document.body.style.backgroundColor=newColor

    rgbText.innerText=newColor

    // if(r<100 && g<100 && b<100){
    //     rgbText.style.color='white'
    // }                                             //this is done to change text color to white when bg is dark 
                                                     //but this logic is not good , because (10,10,250) is also dark  
    //else{                                            
    //     rgbText.style.color='black'
    // }

    //therefore 

    const brightness=r+g+b              // 255+255+255 = 765 

    if(brightness<200){                //below 200 , dark color
        rgbText.style.color='white'
    }else{
        rgbText.style.color='black'
    }        

})

// or 2nd method =

// const btn=document.querySelector('button')
// const rgbText=document.querySelector('h1')
// const random=()=>{
//     const r=Math.floor(Math.random()*255)
//     const g=Math.floor(Math.random()*255)
//     const b=Math.floor(Math.random()*255)

//     return `rgb(${r},${g},${b})`
// }
// btn.addEventListener('click',function(){
//     const newColor=random()
    
//     document.body.style.backgroundColor=newColor

//     rgbText.innerText=newColor

//     const brightness=r+g+b              // 255+255+255 = 765 

//     if(brightness<200){                //below 200 , dark color
//         rgbText.style.color='white'
//     }else{
//         rgbText.style.color='black'
//     }
// })

