import bcrypt, { hash } from 'bcrypt'

const hashPassword= async(pw)=>{
    const salt= await bcrypt.genSalt(12);
    const hash= await bcrypt.hash(pw,salt)
    console.log(salt);
    console.log(hash)
}

hashPassword('helloimpassword')