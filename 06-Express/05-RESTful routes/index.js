import express, { urlencoded } from "express"
const app=express()
import path from "path"
import { v4 as uuidv4 } from 'uuid';

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.set('views',path.join(import.meta.dirname,'/views'))

//our fake database: 
let fakeData =[
    {
            id: uuidv4(),
            username: 'Todd',
            comment: 'lol that is so funny!'
        },
        {
            id: uuidv4(),
            username: 'Skyler',
            comment: 'I like to go birdwatching with my dog'
        },
        {
            id: uuidv4(),
            username: 'Sk8erBoi',
            comment: 'Plz delete your account, Todd'
        },
        {
            id: uuidv4(),
            username: 'onlysayswoof',
            comment: 'woof woof woof'
        }
]

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get('/comments',(req,res)=>{
    // res.send('check (browser)')
    // console.log('check (terminal)')
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
    fakeData.push({username, comment, id:uuidv4()})
    res.redirect('/comments')
})

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get('/comments/:id',(req,res)=>{
    const {id}=req.params                           //getting id 
    const Comt=fakeData.find(c=> c.id===id)     //finding comment of that particular id  
    res.render('show',{Comt})
})                                         //find() returns the entire object that matches the condition(here id is that condition). under the name of newly set variable ( here Comt is that variable)


// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params
    const editComt=fakeData.find(c=>c.id===id)
    res.render('edit',{editComt})
})


// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params
    const newComment=req.body.comment           //get new text from req.body
    const foundComt=fakeData.find(c=>c.id===id)  // Find the comment object that matches the requested ID. 
    foundComt.comment=newComment;           //update the comment with the data from req.body:
    res.redirect('/comments')
})

app.listen(1600,()=>{
    console.log('listining on port 1600')
})