const btn=document.querySelector('button')

btn.onclick=function(){  
    console.log('HEllooo you clicked me')
    console.log('GOOD JOB !!!')
}

btn.onmouseenter=()=>{
    console.log('MOUSE ENTER')
}

const spam=()=>alert('I HATE YOUUUU')

btn.ondblclick=spam;



//onclick etc.. are the event handler properties.