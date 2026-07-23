// axios.get("https://www.swapi.tech/api/people/1/")
// .then(res=>{
//     console.log("workedd!!!",res)
// })
// .catch(e=>{
//     console.log('error !!!',e)
// })


// Axios automatically parses JSON, so no res.json() needed


const starWars=async(id)=>{
    try{
        const res= await axios.get(`https://www.swapi.tech/api/people/${id}/`)
        console.log('WORKED !!!',res)
    }
    catch(e){
        console.log('ERROR!!!',e)
    }
}

starWars(1);


// console.log(res);            // Full Axios response (status, headers, data, etc.)
//console.log(res.data);        // Actual data returned by the API   





//to add headers====
const dadJokes= async()=>{
    const config= {headers:{accept:'application/json'}}
    const res=await axios.get("https://icanhazdadjoke.com/",config)
    return(res.data.joke)
}