const btn=document.querySelector('button')

btn.addEventListener('click', function(){
    console.log('OOPSS......')
})


const tasbtn=document.querySelector('#tas')

tasbtn.addEventListener('dblclick',()=>{
    console.log('TWIST')
})

tasbtn.addEventListener('dblclick',()=>{
    console.log('SHOUT')
})


//why addEventListener is better than event handler properties :

//addEventListener = 
//Multiple functions can run simultaneously.
//Multiple event listeners can be added without replacing or removing previous ones.

//event handler properties =
//Only one event handler can be assigned. A new one overwrites the old one.
//example , if 
//  tasbtn.dblclick=()=>{console.log('Twist')} 
//  tasbtn.dblclick=()=>{console.log('Shout')}               //only shout will print every time 
                                                             //because twist will be overwritten


// IF WE WANT TO RUN ONE PARTICULAR FUNCTION FOR PARTICULAR TIMES:
tasbtn.addEventListener('click',function(){
    console.log('ONLY ONCE')
}, {once:true} )                          //we can use {once:true} after function to run this for only one time                                                   