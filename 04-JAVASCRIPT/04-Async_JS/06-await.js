const changeColor=(color,delay)=>{
    return new Promise((Resolve,reject)=>{
        setTimeout(()=>{
        document.body.style.backgroundColor=color

        Resolve()

    },delay)
    })

}
// .then() method -------------------------

// changeColor('red',2000)
// .then(()=> changeColor('yellow',2000))
// .then(()=> changeColor('green',2000))
// .then(()=> changeColor('blue',2000))
// .then(()=> changeColor('violet',2000))

//await method -----------------------------

const changeNow=async()=>{
    await changeColor('red',1000)             //// Wait until the Promise is resolved before moving to the next line.
    await changeColor('blue',1000)
    await changeColor('yellow',1000)
    await changeColor('green',1000)
    await changeColor('violet',1000)

    return 'All done' ;                        // return sends the final value when the async function completes successfully
                                               // the returned value becomes the resolved value of the Promise
}

changeNow()



const rainBow=async()=>{
    const hi=await changeNow()
    console.log("END OF RAINBOW")
    console.log(hi)                                 //return 'All done"
}

rainBow()