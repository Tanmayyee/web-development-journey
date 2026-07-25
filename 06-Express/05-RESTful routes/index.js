import express from "express"
const app=express()
import path from "path"

app.set('view engine','ejs')

app.set('views',path.join(import.meta.dirname,'/views'))

//our fake database: 
let fakeData =[
    {
            id: 500,
            username: 'Todd',
            comment: 'lol that is so funny!'
        },
        {
            id: 300,
            username: 'Skyler',
            comment: 'I like to go birdwatching with my dog'
        },
        {
            id: 600,
            username: 'Sk8erBoi',
            comment: 'Plz delete your account, Todd'
        },
        {
            id: 800,
            username: 'onlysayswoof',
            comment: 'woof woof woof'
        }
]
app.get('/comments',(req,res)=>{
    console.log('check')
})

app.listen(1600,()=>{
    console.log('listining on port 1600')
})