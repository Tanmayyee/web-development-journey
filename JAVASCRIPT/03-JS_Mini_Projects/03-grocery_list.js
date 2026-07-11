const list=document.querySelector('#list')
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newPro=form.elements.product;                    // will select attribute inside form element with the id of product
    const newqty=form.elements.qty;

    addElement(newPro.value , newqty.value)                  //addElement(apple , 5)

    newPro.value=""
    newqty.value=""
})

const addElement=(product,quantity)=>{                       //addElement(apple , 5)      //from newPro.value and newqty.value
    const newli=document.createElement('li')
    newli.innerText=`${quantity} ${product}`
    list.append(newli)
}


// or 2nd method without using separate func  --------------------------------------------


// const list=document.querySelector('#list')
// const form=document.querySelector('form')

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const newPro=form.elements.product;            
//     const newqty=form.elements.qty;

//     const np=newPro.value
//     const nq=newqty.value

//     const newli=document.createElement('li')
//     newli.innerText=`${nq} ${np}`

//     list.append(newli)

//     newPro.value=""
//     newqty.value=""
// })






