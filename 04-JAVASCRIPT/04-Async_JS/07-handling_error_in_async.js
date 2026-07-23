const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


const makeTwoRequest=async()=>{
    try{
        const data1=await fakeRequestPromise('/page1')
        const data2=await fakeRequestPromise('/page2')
        console.log('HUREYYY SUCCESSFULL')
    }
    catch(e){
        console.log('error:',e)
    }
}

makeTwoRequest()





// if promise chaining -----------------------------
// login()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Success → .then()
// Error → .catch()



//if async/await ------------------------------------
// try {
//     const data = await login();
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// success -> code run inside try 
// error( promise reject or throw ) -> catch code run
