const btns=document.querySelectorAll('button')
const h1=document.querySelectorAll('h1')

const random=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}

const colorizer=function(){                                 //"this" keyword not works with arrow function , use normal function() with "this" keyword
    this.style.backgroundColor=random()
    this.style.color=random()
}

for(let btn of btns){
    btn.addEventListener('click',colorizer)
}

for(let h of h1){
    h.addEventListener('click',colorizer)
}