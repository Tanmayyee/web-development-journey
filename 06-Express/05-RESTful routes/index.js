import express, { urlencoded } from "express"
const app=express()
import path from "path"

app.use(express.urlencoded({extended:true}))

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

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get('/comments',(req,res)=>{
    res.render('index',{fakeData})
})

// **********************************
// NEW - renders a form
// **********************************
app.get('/comments/new',(req,res)=>{
    res.render('new')
})

// **********************************
// CREATE - creates a new comment
// **********************************
app.post('/comments',(req,res)=>{
    const { comment , username  }=req.body
    fakeData.push({username, comment})
    res.redirect('/comments')
})


app.listen(1600,()=>{
    console.log('listining on port 1600')
})