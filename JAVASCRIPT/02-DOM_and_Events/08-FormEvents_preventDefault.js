const form=document.querySelector('#shelterForm')
const list=document.querySelector('#list')
const input=document.querySelector('#input')

form.addEventListener('submit',function(e){
    e.preventDefault();                          //preventDefault() stops the browser's default action for an even ,,, for a form the default action is to submit and goes to path that is filled inside "action" attribute inside form element    
    const fav=input.value                      // Gets the text entered by the user in the input field.
    const li=document.createElement('li');
    li.innerText=fav;
    list.append(li);
    input.value="";                         //clears the input field 

})