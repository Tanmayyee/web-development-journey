const input=document.querySelector('input')
const h1=document.querySelector('h1')
const h2=document.querySelector('h2')
const input2=document.querySelector('#z')
const head2=document.querySelector('#head2')

input.addEventListener('input',function(e){           //input event: Triggered whenever the user changes the input value
    h2.innerText=input.value
})

input2.addEventListener('change',function(e){       //change event : runs when the input value is changed and confirmed  or input loses focus
    head2.innerText=input2.value
})



//other events ::
'click'    // when an element is clicked
'input'    // when the input value changes (live change will show)
'change'   // when the value changes and the input loses focus (for text inputs)  ( hit enter or click somewhere else to confirm input)
'submit'   // when a form is submitted
'keydown'  // when a key is pressed
'keyup'    // when a key is released



// //task : to get "Welcome, input"  , without typing welcome and initially the text is "Enter Your Username":

// const input=document.querySelector('#username')
// const h1=document.querySelector('h1')

// input.addEventListener('input',function(e){
//     if(input.value===""){
//         h1.innerText='Enter Your Username'
//     }else{
//     h1.innerText=`Welcome, ${input.value}`         //if , if condition is not used then welcome will come as a output even if we type nothing
//     }
// })