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



//=======================================================================================================
//============================= Traversing parent/child/sibling ==================================
//=======================================================================================================

const firstBold=document.querySelector('b')

firstBold.parentElement   // return =  <p>...</p>

firstBold.parentElement.parentElement   // return = <body>...</body>


//childElementCount   and   children ---------------------

const paragraph1=document.querySelector('p')

paragraph1.childElementCount   //returns the number of child elements inside an element.

paragraph1.children  //returns all the child HTML elements of an element as an HTMLCollection.
//this will return = HTMLCollection(8) [b, b, a.hello, a, a, a, a, a] ,, "and its not an array"

paragraph1.children[2]  //returns a.hello

paragraph1.children[2].parentElement  //returns <p>...</p>


//sibling ---------------------------

const squareImg=document.querySelector('.square')

squareImg.nextSibling             
                                    // returns "#text" because HTML treats spaces and line breaks in html file as text nodes. nextSibling and previousSibling returns the very next node, not just the next HTML element.
// or squareImg.previousSibling


// therefore we use nextElementSibling  and  previousElementSibling 

squareImg.nextElementSibling  //returns img ( next img )

squareImg.previousElementSibling  //returns <p>...</p>




//=============================================================================================================
//============================= Append & AppendChild ==========================================================
//=============================================================================================================

// creating a new element(like img , b , p , h1 .....) to add in html file --------------------- 


//METHOD ONE : using appendChild()

const newImg=document.createElement('img')

//step 1: adding source link to the img
newImg.src="https://i.ytimg.com/vi/h06ByoSkpH0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDM9GW6JDbSt1eVeomn82cnMeLj1Q"

//step 2: img still not on the page , so we need to append it to the page
document.body.appendChild(newImg)  // appendChild() adds the new element as the last child of the parent element 
//or =  const pizza=document.querySelector('p') ,
//pizza.appendChild(newImg)  , this will end newImg at the end of paragraph

//step 3: add class to newImg
newImg.classList.add('square')


//another example for creating new element
const h3=document.createElement('h3')
h3.innerText='I am new'
document.body.appendChild(h3)     //at the end of body 

//so make a change first to the new element then append 

//###############################################################################################################################
//Everything in the DOM is a node, including HTML elements ,text, and attributes 
//Things that are not nodes :  primitive data types(like strings, numbers, booleans) , custom JS objects, window object.

//appendChild() accepts only Node objects like element nodes(div,p..)or text nodes created with document.createTextNode()
// , while append() accepts Node objects like element nodes or text nodes and plain text strings directly.
//###############################################################################################################################

//METHOD TWO : using append

const paraz=document.querySelector('p')

paraz.append('Hey I am a new text yayyyyyy using append()!!!!!!!') //we can add string directly using append() ,, this is not possible with appendChild()

// to add string by using appendChild , we have to use document.createTextNode()
//ex=    const paraz=document.querySelector('p')
//       newTextAdd=document.createTextNode('Hey I am a new text yayyyyy !!!!')
//       paraz.appendChild(newTextAdd)

//we can add multiple things using append()
paraz.append('heyyyyy','heyooo','byeee')


//PREPEND() :----------------------------------------------------------

//task :  add new bold text at the starting of paragraph
const newB=document.createElement('b')                           //to create a new element 
newB.append('HEY THERE !!!!!!!')                                    //to add text 
paraz.prepend(newB)                                              //use prepend to add new element at the starting of target element


//insertAdjacentElement():---------------------------------------------

//insertion position =
//'beforebegin' :before the targetElement itself.
//'afterbegin'  :just inside the targetElement, before its first child.
//'beforeend'   :just inside the targetElement, after its last child.
//'afterend'   :after the targetElement itself


//insertAdjacentElement() only insert elements , if we want to insert text or HTML,
//then ,  insertAdjacentText()     and     insertAdjacentHTML()  will be used.

const heading2=document.createElement('h2') 
heading2.append('Are adorable chicken!!!!![insertAdjacentElement()]')
const headingg1=document.querySelector('h1')
headingg1.insertAdjacentElement('afterend',heading2)


//after() ------------------------------------------------------------
//insert an element after some other element 

const heading3=document.createElement('h3')
heading3.innerText='Hey I am an h3 , [after()]'
const head1=document.querySelector('h1')
head1.after(heading3)


//before()-------------------------------------------------------------
//insert an element before some other element 



//=============================================================================================================
//======================================= remove() and removeChild() ==========================================
//=============================================================================================================

//used to remove an element 

//removeChild()  ----- old method     //it can not remove element directly , we have to use parent element of target element

// const pic=document.querySelector('img')
// const picParent=pic.parentElement
// picParent.removeChild(pic)

// or =
//     const pic=document.querySelector('img')
//     pic.parentElement.removeChild(pic)        


//remove() ------------------ can remove element directly 

// const pix=document.querySelector('img')
// pix.remove()

