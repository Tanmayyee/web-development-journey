const form=document.querySelector('#shelterForm')
const list=document.querySelector('#list')
const input=document.querySelector('#input')      // or form.element.input   // this will select element inside form with the id of "input"

form.addEventListener('submit',function(e){
    e.preventDefault();                          //preventDefault() stops the browser's default action for an even ,,, for a form the default action is to submit and goes to path that is filled inside "action" attribute inside form element    
    const fav=input.value                      // Gets the text entered by the user in the input field.
    const li=document.createElement('li');
    li.innerText=fav;
    list.append(li);
    input.value="";                         //clears the input field 

})



//form.elements.product                 	✅ Form inputs (recommended)

//form.querySelector('#product')	        Finding elements with CSS selectors inside a form

//document.querySelector('#product')	    Finding any element in the whole document