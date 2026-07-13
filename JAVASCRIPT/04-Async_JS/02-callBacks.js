console.log('hello before callback function setTimeout')

setTimeout(()=>{
    console.log('inside setTimeout')
},3000)

console.log('After setTimeout')