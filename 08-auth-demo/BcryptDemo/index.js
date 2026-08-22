import bcrypt from 'bcrypt'

const hashPassword= async(pw)=>{
    const hash= await bcrypt.hash(pw,12)
    console.log(hash);
}

const login= async(pw,hashedpw)=>{
    const result= await bcrypt.compare(pw,hashedpw);
    if(result){
        console.log("logged in!")
    }else{
        console.log("incorrect password!")
    }
}

hashPassword('helloimpassword')  //You only run this when a user is creating a brand new account or changing their password.
login('helloimpassword','$2b$12$dGcJ0aY0q3XBiUJ2jNK07ufEDmdna/1AaNszMyKofKbT1kxrlD0iq')
