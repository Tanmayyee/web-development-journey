async function hello(){            // async function always returns a Promise

}

//---------------------------------------------------------------------------------

const hi=async()=>{
    
    // return 'success'
    throw 'hahaha error'
    // throw new error('hahaha erroorrr')
}

hi()
.then(data=>{
    console.log('wowww worked',data)
})
.catch(err=>{
    console.log('rejected')
    console.log(err)
})


//----------------------------------------------------------------------------------


const login=async(username,password)=>{
    if(!username || !password) throw 'Missing credentails'
    else if(password==='HelloTanmay') return 'LOGGED IN'
    else throw 'invalid password'
}

login('tanmay','jonkyy')
.then(data=>{
    console.log('welcome you are successfully:',data)
})
.catch(err=>{
    console.log('error:',err)
})