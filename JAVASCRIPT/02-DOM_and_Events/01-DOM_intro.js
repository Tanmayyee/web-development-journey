//===============================================================================================
//======================== querySelector & querySelectorAll =====================================
//===============================================================================================

// const h1=document.querySelector('h1')      //element or tag 

// const allImg=document.querySelectorAll('img')     //select 'all' img elemenet using querySelectorAll

// const hey=document.querySelector('#toc')     //select id using #

// const class=document.querySelector('.toctitle')   //select class using .


//===============================================================================================
//============================= innerText , innerHTML , textContent =============================
//===============================================================================================

const h1=document.querySelector('h1').innerText='Silkie.. Chickenzz'  //innerText is used to view or change the text of an element

//or ----
// h1.innerText='silkie.. Chickenzz'
// to view text simply use --  he.innerText       //but innerText will not show the hidden text in the element


//textContent will show hidden text and we can use it to view or change the text 
 
//const para=document.querySelector('p').textContent


// innerText gets the text exactly as the user sees it on the screen,
// while textContent gets the raw text exactly as it is written in the HTML code

//we can not add tags using innerText and textContent  , they are only useful for text

//so to view or add tags like <i></i> or <p></p> ... we use innerHTML....

const a=document.querySelectorAll('a')
for(let tag of a){                        //for of loop is used to iterate over the array of elements and change the innerHTML of each element
    tag.innerHTML='<b>innerHTML</b>'
}



//========================================================================================================
//============================================ attribute =================================================
//========================================================================================================

//accessing attributes :-----------------------------------------------------------------------------

const input=document.querySelectorAll('input')[1]      //we have two input - input[0] and input[1] and we want to select input with type=text (see html file)

//or -- const input=document.querySelector('input [type="text"]')

input.type='color'
//or input.type    to see input type  , text or password or color or ...


//  const banner=document.querySelector('#banner').id='whoops'
// or whoops.id='blah'           //whoops.id because now banner changes from whoops 


//accessing attributes using getAttribute() and setAttribute():--------------------------------------

const firstLink=document.querySelector('a')

// firstLink.href 
// output- http://127.0.0.1:5500/wiki/List_of_chicken_breeds      //getting from JS

//by using getAttribute()
firstLink.getAttribute('href')
// output- /wiki/List_of_chicken_breeds   //getting directly from html 

firstLink.getAttributeNames() // getAttributeNames() gets an array of all attribute names present on the element

firstLink.setAttribute('class','hello') //Sets the value of an attribute on the element (creates it if it doesn't exist)


// example-------- change img url and alt name to chicken
// const img=document.querySelector('img')
// img.setAttribute('src', 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200')  //using setAttribute method 
// img.alt='chicken'       //using attribute directly



//=======================================================================================================
//============================= changing or manipulating styles using JS ================================
//=======================================================================================================


const h1z=document.querySelector('h1')

h1z.style.color   //this will give empty string ,, because this style object does not contain styles from style sheet
                 // it contain inline styles only ( style in html file )
                 //only show and change inline style 

h1z.style.fontSize    // one more thing is that here font-size is not allowed , only camel case is allowed 



window.getComputedStyle(h1z)  //returns object and ,, represent the final rendered style of the element , combining inline , external , inherited and default styles after all calculation 


// inline style changes is just not ideal , better way to apply new styles to elements ,which is to use class

//we can define a css class and then add that class or remove that class from elements using classList property

const paragraph=document.querySelector('p')

paragraph.classList  //Returns a list of all classes present on this element

paragraph.classList.add('newclass')  //add new class using .classList

paragraph.classList.add('onemoreclass')   //we can add multiple classes using .classList

paragraph.classList.remove('newclass') //remove 

paragraph.classList.contains('onemoreclass')  //return true or false , if class present then true 

paragraph.classList.toggle('onemoreclass')  //Toggles the class on and off like a light switch  //Adds the class if it's missing, removes it if it's already there

