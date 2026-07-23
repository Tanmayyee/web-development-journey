// fetch("https://www.swapi.tech/api/people/1/")
// .then(res=>{
//     console.log('WORKEDD !!!',res)            //Response object received (not the actual JSON data yet)
//     return res.json();                       // Convert the response body into a JavaScript object
// })
// .then(data=>{
//     console.log(data.result.properties)     
// })
// .catch(e=>{
//     console.log('ERROR !!!',e)
// })

//using then and catch -----------------------------------------------------------------------

// fetch("https://www.swapi.tech/api/people/1/")
// .then(res=>{
//     console.log('WORKEDD !!!',res)            
//     return res.json();                       
// })
// .then(data=>{
//     console.log(data.result.properties)
//     return fetch("https://www.swapi.tech/api/people/2/")
// })
// .then(res=>{
//     console.log('worked 2nd',res)
//     return res.json();
// })
// .then(data=>{
//     console.log(data.result.properties)
// })
// .catch(e=>{
//     console.log('ERROR !!!',e)
// })


//using try and catch ----------------------------------------------------------------------------------

const starWarsPeople=async()=>{
   try{
     const res= await fetch("https://www.swapi.tech/api/people/1/")
    const data= await res.json()
    console.log(data.result.properties)
    const res2= await fetch("https://www.swapi.tech/api/people/2/")
    const data2= await res2.json()
    console.log(data2.result.properties)                  // Access data based on the API's response structure
                                            // Always check console.log(data) first, then access the required properties according to the API response structure which can be different for different websites 
   }
   catch(e){
    console.log('ERROR !!!',e)
   }
}

starWarsPeople();
