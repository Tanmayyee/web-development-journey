const dadJokes= async()=>{
    const config= {headers:{accept:'application/json'}}
    const res=await axios.get("https://icanhazdadjoke.com/",config)
    return(res.data.joke)
}

const ul=document.querySelector('#ul')
const btn=document.querySelector('#btn')

const addJoke= async()=>{
    const joke= await dadJokes()
    const newLi=document.createElement('li')
    newLi.innerText=joke
    ul.append(newLi)

}

btn.addEventListener('click',addJoke)