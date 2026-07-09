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
